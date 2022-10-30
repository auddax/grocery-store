import NavBar from '../NavBar/NavBar';
import styles from './Header.module.css';

const Header = () => {
  return(
    <header>
      <NavBar />
      <div className={styles['title']}>
        <h1>Our catalog</h1>
      </div>
    </header>
  )
}

export default Header;