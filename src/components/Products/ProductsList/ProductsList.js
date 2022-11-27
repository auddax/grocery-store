import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './ProductsList.module.css';
import ProductCard from '../ProductCard/ProductCard';
import { StoreContext } from '../../../store/storeProvider';

const ProductsList = () => {
  const store = useContext(StoreContext);

  return(
    <div className={styles['products-list']}>
      {store.productStore.products.map((product) => {
        return <ProductCard data={product} key={uuidv4()} />
      })}
    </div>
  )
}

export default observer(ProductsList);
