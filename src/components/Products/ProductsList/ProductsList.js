import { v4 as uuidv4 } from 'uuid';
import { observer } from 'mobx-react-lite';
import styles from './ProductsList.module.css';
import store from '../../../store/rootStore'
import ProductCard from '../ProductCard/ProductCard';

const ProductsList = () => {
  return(
    <div className={styles['products-list']}>
      {store.productStore.products.map((product) => {
        return <ProductCard data={product} key={uuidv4()} />
      })}
    </div>
  )
}

export default observer(ProductsList);
