import styles from './ProductCard.module.css';

const ProductCard = ({ data }) => {
  const addHandler = () => {
    console.log(data.name);
  };

  return (
    <div className={styles.outer}>
      <div className={styles.left}>
        <div className={styles.topRow}>
          {data.isVeg ? (
            <div className={styles.vegOuter}>
              <div className={styles.veg} />
            </div>
          ) : (
            <div className={styles.nvOuter}>
              <div className={styles.nv} />
            </div>
          )}
          {data.recommended ? <p>Bestseller</p> : null}
        </div>
        <h3>{data.name}</h3>
        <p>{data.price}</p>
        {data?.description ? <p>{data.description}</p> : null}
      </div>

      <div className={styles.right}>
        <img className={styles.productImage} src={data.cloudinaryImageId} alt='Product' />
        <button className={styles.addButton} onClick={addHandler}>
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
