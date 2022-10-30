import styles from './SearchForm.module.css';

const SearchForm = () => {
  return(
    <form className={styles['search-form']}>
      <input type="search" placeholder=" Search" id="itemsSearch" autocomplete="off" autofocus />
    </form>
  )
}

export default SearchForm;