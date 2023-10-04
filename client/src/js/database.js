import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  try {
    
    const db = await openDB('jate', 1);
   
    // Open a transaction and access the object store
    const tx = db.transaction('jate', 'readwrite');
    const store = tx.objectStore('jate');

    // Add the content to the object store
    const request = store.put({ id: 1, value: content });
    
    // Complete the transaction
    const result = await request
  } catch (error) {
    console.error('Error in putDb:', error);
    throw error; // Rethrow the error for error handling at a higher level.
  }
};
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  try {
    const db = await openDB('jate', 1);

    // Open a transaction and access the object store
    const tx = db.transaction('jate', 'readonly');
    const store = tx.objectStore('jate');

    // Retrieve all content from the object store
    const content = await store.get(1);

    return content;
  } catch (error) {
    console.error('Error in getDb:', error);
    throw error; // Rethrow the error for error handling at a higher level.
  }
};

initdb()



