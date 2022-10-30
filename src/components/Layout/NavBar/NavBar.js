import styles from './NavBar.module.css';
import logoImage from '../../../assets/img/logo.png'
import SearchForm from '../SearchForm/SearchForm';
import { Heart, Cart } from 'react-bootstrap-icons';

const NavBar = () => {
  return(
    <nav className={styles['navbar']}>
      <img className={styles['navbar__logo']} src={logoImage} alt="Organic Food Logo" />
      <ul className={styles['navbar__items']}>
        <li>Home</li>
        <li>Product</li>
        <li>About us</li>
        <li>Contact</li>
      </ul>
      <div className={styles['navbar__controls']}>
        <SearchForm />
        <Heart className={styles['navbar__icon']} />
        <Cart className={styles['navbar__icon']}/>
      </div>
    </nav>
  )
}

export default NavBar;