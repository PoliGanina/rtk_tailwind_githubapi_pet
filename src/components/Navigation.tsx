import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
      <h3>Github Search</h3>

      <span>
        <Link to="/" className="mr-5">
          Home
        </Link>
        <Link to="/favourite">Favourite Page</Link>
      </span>
    </nav>
  );
};

export default Navigation;
