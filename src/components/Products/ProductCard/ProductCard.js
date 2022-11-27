import Card from '../../UI/Card/Card';
import { observer } from 'mobx-react-lite';
import { Heart } from 'react-bootstrap-icons';
import styles from './ProductCard.module.css';

const ProductCard = ({ data }) => {
  // console.log(data)
  return(
    <Card>
      <Heart className={styles['card-heart']} />
      <figure className={styles['card-img']}>
        <img src={data[3]} alt={data[0].split(' ')[0]} />
      </figure>
      <h3 className={styles['card-title']}>{data[0]}</h3>
      <p className={styles['card-price']}>Цена: {data[4]}</p>
      <p className={styles['card-instock']}>Доступно: {data[8]}</p>
    </Card>
  )
}

export default observer(ProductCard);
