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
  import { db } from './firebase';
  
  export type Message = {
    id?: string;
    name: string;
    message: string;
    timestamp: Date;
  }
  
  const MESSAGES_COLLECTION = 'messages';
  
  // Add a new message
  export async function addMessage(name: string, message: string): Promise<void> {
    try {
      await addDoc(collection(db, MESSAGES_COLLECTION), {
        name: name.trim(),
        message: message.trim(),
        timestamp: Timestamp.now(),
        createdAt: Timestamp.now()
      });
    } catch (error) {
      console.error('Error adding message:', error);
      throw new Error('Failed to add message');
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
          timestamp: data.timestamp.toDate()
        };
      });
    } catch (error) {
      console.error('Error getting messages:', error);
      throw new Error('Failed to get messages');
    }
  }