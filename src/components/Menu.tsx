import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../menuSlice';

const Menu = () => {
  const menuItems = useSelector((state) => state.menu.items);
  const dispatch = useDispatch();
console.log(menuItems);

  return (
    <div>
      <h2>Меню</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}
            <img src={item.image} alt=""/>

            <button onClick={() => dispatch(removeItem(item.id))}>Өчүрүү</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;