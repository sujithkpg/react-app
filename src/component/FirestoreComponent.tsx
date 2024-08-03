import React, { useState, useEffect } from 'react';
import { collection, getDocs, DocumentData } from 'firebase/firestore';
import { firestore } from '../service/firebase'; // Adjust the path as needed

const FirestoreComponent: React.FC = () => {
  const [data, setData] = useState<DocumentData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'your-collection'));
        const items = querySnapshot.docs.map(doc => doc.data());
        setData(items);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* <h1>Firestore Data</h1> */}
      <ul>
        {data.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default FirestoreComponent;