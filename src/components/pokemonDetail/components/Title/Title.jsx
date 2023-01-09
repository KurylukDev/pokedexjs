import styles from "./styles.module.css";


export const Title = ({ content, backgroundSelected }) => {
  return (
    <span className={styles.title} style={{ color: backgroundSelected }}>
      {content}
    </span>
  );
};