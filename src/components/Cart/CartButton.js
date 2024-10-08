import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    // alert('hellooooo')
    dispatch(uiActions.toggle());
  }
    const cartQuanity = useSelector(state => state.cart.totalQuantity);
  
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuanity}</span>
    </button>
  );
};

export default CartButton;
