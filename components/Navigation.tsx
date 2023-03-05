import Link from "@/components/Link";
const links = ["about", "photography", "software"];

const Navigation = () => {
  return (
    <nav className="navbar bg-transparent fixed top-0 px-4 z-10 flex justify-end">
      <ul className="menu menu-horizontal">
        <li className="mx-4 text-xl capitalize">
          <Link href={`/`}>Home</Link>
        </li>

        {links.map((link) => {
          return (
            <li className="mx-4 text-xl capitalize" key={link}>
              <Link href={`/${link}`}>{link}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
