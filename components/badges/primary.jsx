import styles from "./styles.module.scss";

export default function Primary({ label }) {
  return <div className={styles.tag}>{label}</div>;
}
