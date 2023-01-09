
import styles from "./styles.module.css";

export const Header = ({ pokemon }) => {

  return (
    <header>
      <div className={styles.left}>
        <span>{pokemon.name}</span>
      </div>
      <p>#{pokemon.id}</p>
    </header>
  );
};