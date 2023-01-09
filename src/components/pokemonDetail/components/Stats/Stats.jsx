import styles from "./styles.module.css";

export const Stats = ({ pokemon }) => {
  return (
    <div className={styles.stats}>
      <div className={styles.item}>
        <span>{pokemon.weight} </span>
        <p>Weight</p>
      </div>
      <div className={styles.item}>
        <span>{pokemon.height} </span>
        <p>Height</p>
      </div>
    </div>
  );
};