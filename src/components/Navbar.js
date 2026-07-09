import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav>

      <Link to="/">Home</Link>

      <Link to="/products">Plants</Link>

      <Link to="/cart">
       Cart (
{
cartCount
}
)
      </Link>

    </nav>
  );
}

export default Navbar;