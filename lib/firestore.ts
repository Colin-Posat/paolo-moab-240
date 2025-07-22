// lib/firestore.ts
import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  limit, 
  Timestamp 
} from 'firebase/firestore';
import { 
  ref, 
  uploadBytes, 
  getDownloadURL, 
  deleteObject 
} from 'firebase/storage';
import { db, storage } from './firebase';

export type Message = {
  id?: string;
  name: string;
  message: string;
  imageUrl?: string;
  timestamp: Date;
}

const MESSAGES_COLLECTION = 'messages';
const IMAGES_FOLDER = 'message-images';

// Helper function to compress image
function compressImage(file: File, maxWidth: number = 800, quality: number = 0.8): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) {
      reject(new Error('Failed to get canvas context'));
      return;
    }
    
    const img = new Image();
    
    img.onload = () => {
      // Calculate new dimensions
      const ratio = Math.min(maxWidth / img.width, maxWidth / img.height);
      const newWidth = img.width * ratio;
      const newHeight = img.height * ratio;
      
      canvas.width = newWidth;
      canvas.height = newHeight;
      
      // Draw and compress
      ctx.drawImage(img, 0, 0, newWidth, newHeight);
      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error('Failed to compress image'));
        }
      }, 'image/jpeg', quality);
    };
    
    img.onerror = () => {
      reject(new Error('Failed to load image'));
    };
    
    img.src = URL.createObjectURL(file);
  });
}

// Upload image to Firebase Storage
async function uploadImage(file: File): Promise<string> {
  try {
    // Compress the image first
    const compressedBlob = await compressImage(file);
    
    // Create unique filename
    const filename = `${Date.now()}-${Math.random().toString(36).substring(2)}.jpg`;
    const imageRef = ref(storage, `${IMAGES_FOLDER}/${filename}`);
    
    // Upload the compressed image
    const snapshot = await uploadBytes(imageRef, compressedBlob);
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    return downloadURL;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw new Error('Failed to upload image');
  }
}

// Add a new message with optional image
export async function addMessage(
  name: string, 
  message: string, 
  imageFile?: File
): Promise<void> {
  try {
    let imageUrl: string | undefined;
    
    // Upload image if provided
    if (imageFile) {
      // Validate file type
      if (!imageFile.type.startsWith('image/')) {
        throw new Error('Please select a valid image file');
      }
      
      // Validate file size (max 5MB)
      if (imageFile.size > 5 * 1024 * 1024) {
        throw new Error('Image size must be less than 5MB');
      }
      
      imageUrl = await uploadImage(imageFile);
    }
    
    // Add message to Firestore
    await addDoc(collection(db, MESSAGES_COLLECTION), {
      name: name.trim(),
      message: message.trim(),
      imageUrl: imageUrl || null,
      timestamp: Timestamp.now(),
      createdAt: Timestamp.now()
    });
  } catch (error) {
    console.error('Error adding message:', error);
    throw error; // Re-throw to preserve the original error message
  }
}

// Get all messages (ordered by newest first)
export async function getMessages(limitCount: number = 50): Promise<Message[]> {
  try {
    const q = query(
      collection(db, MESSAGES_COLLECTION),
      orderBy('timestamp', 'desc'),
      limit(limitCount)
    );
    
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        name: data.name,
        message: data.message,
        imageUrl: data.imageUrl || undefined,
        timestamp: data.timestamp.toDate()
      };
    });
  } catch (error) {
    console.error('Error getting messages:', error);
    throw new Error('Failed to get messages');
  }
}

// Helper function to delete an image from storage (for cleanup if needed)
export async function deleteImage(imageUrl: string): Promise<void> {
  try {
    const imageRef = ref(storage, imageUrl);
    await deleteObject(imageRef);
  } catch (error) {
    console.error('Error deleting image:', error);
    // Don't throw error for cleanup operations
  }
}