export default function Container({ children }) {
  const css = "px-5p lg:px-10p";
  return <section className={css}>{children}</section>;
}
