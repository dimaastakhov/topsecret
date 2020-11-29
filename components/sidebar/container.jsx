import styles from "./styles.module.scss";

export default function Container({ children }) {
  const css = `${styles.container} px-5p lg:px-10p h-full overflow-y-scroll`;
  return <section className={css}>{children}</section>;
}
