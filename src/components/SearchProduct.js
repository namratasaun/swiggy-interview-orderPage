import debounce from '../utils/debounce';
import search from '../utils/search';
import styles from './SearchProduct.module.css';

const SearchProduct = ({ allData, setProductData }) => {
  const changeHandler = (ev) => {
    debounce(() => {
      let temp = search(allData.current, ev.target.value);
      setProductData(temp);
    }, 600);
  };
  return <input className={styles['top-search-bar']} type='text' onChange={changeHandler} />;
};

export default SearchProduct;
