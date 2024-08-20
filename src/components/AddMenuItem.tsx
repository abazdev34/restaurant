import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../menuSlice';

const AddMenuItem = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && price&& image) {
      dispatch(addItem({
        id: Date.now(), // Жөнөкөй ID генерациясы
        name,
        price: parseFloat(price),
        image: image
      
      }));
      setName('');
      setPrice('');
      setImage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Жаңы меню элементин кошуу</h3>
      <div>
        <label htmlFor="name">Аталышы:</label>
        <input 
          type="text" 
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="price">Баасы:</label>
        <input 
          type="number" 
          id="price"
          value={price}

          onChange={(e) => setPrice(e.target.value)}
          step="0.01"
          required
        />
        <input type="file" 
        onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <button type="submit">Кошуу</button>
    </form>
  );
};

export default AddMenuItem;