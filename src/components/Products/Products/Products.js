import ProductsList from '../ProductsList/ProductsList';
import styles from './Products.module.css';

const Products = () => {
  return(
    <section className={styles['products']}>
      <ProductsList />
    </section>
  )
}

export default Products;
