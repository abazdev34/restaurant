import { useEffect, useState, useCallback } from 'react'
import { addFood, getFoodList } from '../pocketbase';

const FoodForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [comment, setComment] = useState('');
  const [foodList, setFoodList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadFoodList = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const list = await getFoodList();
      setFoodList(list);
    } catch (error) {
      console.error("Тамактар тизмесин жүктөөдө ката кетти", error);
      setError("Тамактар тизмесин жүктөө мүмкүн болбоду");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadFoodList();
  }, [loadFoodList]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const newFood = {
        name,
        price: Number(price),
        comment,
        date: new Date().toISOString()
      };
      await addFood(newFood);
      setName('');
      setPrice('');
      setComment('');
      await loadFoodList();
    } catch (error) {
      console.error("Тамак кошууда ката кетти", error);
      setError("Тамак кошуу мүмкүн болбоду");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Тамактын аты"
          required
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Баасы"
          required
        />
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Комментарий"
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Жүктөлүүдө...' : 'Кошуу'}
        </button>
      </form>

      <h2>Тамактар тизмеси:</h2>
      {isLoading ? (
        <p>Жүктөлүүдө...</p>
      ) : (
        <ul>
          {foodList.length > 0 ? (
            foodList.map((food) => (
              <li key={food.id}>
                {food.name} - {food.price} сом - {food.comment}
              </li>
            ))
          ) : (
            <li>Тамактар жок</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default FoodForm;