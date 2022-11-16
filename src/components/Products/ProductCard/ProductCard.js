import Card from '../../UI/Card/Card';
import { observer } from 'mobx-react-lite';
import { Heart } from 'react-bootstrap-icons';
import styles from './ProductCard.module.css';

const ProductCard = (props) => {
  // console.log(props.data)
  return(
    <Card>
      <Heart className={styles['card-heart']} />
      <figure className={styles['card-img']}>
        <img src={props.data[3]} alt={props.data[0].split(' ')[0]} />
      </figure>
      <h3 className={styles['card-title']}>{props.data[0]}</h3>
      <p className={styles['card-price']}>Цена: {props.data[4]}</p>
      <p className={styles['card-instock']}>Доступно: {props.data[8]}</p>
    </Card>
  )
}

export default observer(ProductCard);
