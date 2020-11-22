import Link from "../activeLink";

export default function Links({ links, inverse }) {
  const linkCssActive = inverse
    ? "font-main leading-tight text-blue-600 text-xl align-text-top no-underline"
    : "font-main leading-tight text-white align-text-top no-underline";
  const linkCss = inverse
    ? "font-main leading-tight text-white text-xl align-text-top no-underline"
    : "font-main leading-tight text-secondary hover:text-white align-text-top no-underline";
  const listCss = inverse ? "pt-8 whitespace-nowrap" : "whitespace-nowrap";
  return (
    <>
      {links &&
        links.map(({ href, label }) => (
          <li className={listCss} key={`${href}${label}`}>
            <Link activeClassName={linkCssActive} href={href}>
              <a className={linkCss}>{label}</a>
            </Link>
          </li>
        ))}
    </>
  );
}
