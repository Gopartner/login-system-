import React, { useState } from 'react';
import { getDatabase, ref, push } from 'firebase/database';

const AddItem = () => {
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');

    const handleAddItem = () => {
        const db = getDatabase();
        const itemsRef = ref(db, 'shopping-list');
        const newItemRef = push(itemsRef);
        newItemRef.set({
            name: itemName,
            price: itemPrice
        });
        setItemName('');
        setItemPrice('');
    };

    return (
        <div>
            <h2>Tambah Item</h2>
            <input
                type="text"
                placeholder="Nama Item"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Harga Item"
                value={itemPrice}
                onChange={(e) => setItemPrice(e.target.value)}
            />
            <button onClick={handleAddItem}>Tambah</button>
        </div>
    );
};

export default AddItem;
