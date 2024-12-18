import React from 'react';
import ShoppingList from './ShoppingList';
import AddItem from './AddItem';

const Shopping = () => {
    return (
        <div>
            <h1>Aplikasi Daftar Belanja</h1>
            <AddItem />
            <ShoppingList />
        </div>
    );
};

export default Shopping;
