export default function Container({ children }) {
  return (
    <section className="px-5 py-6 lg:px-14 lg:py-7 xl:px-28 xl:py-14 z-20 relative overflow-hidden">
      {children}
    </section>
  );
}
