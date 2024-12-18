import React, { useEffect, useState } from'react';
import { getDatabase, ref, onValue } from 'firebase/database';

const ShoppingList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const itemsRef = ref(db,'shopping-list');
    return onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      const itemList = data? Object.values(data) : [];
      setItems(itemList);
    });
  }, []);

  return (
    <div>
      <h2>Daftar Belanja</h2>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>{item.name} - {item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
