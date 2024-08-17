import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../menuSlice';
import AddMenuItem from './AddMenuItem';

const Menu = () => {
  const menuItems = useSelector((state) => state.menu.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Меню</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}
            <button onClick={() => dispatch(removeItem(item.id))}>Өчүрүү</button>
          </li>
        ))}
      </ul>
      <AddMenuItem />
    </div>
  );
};

export default Menu;