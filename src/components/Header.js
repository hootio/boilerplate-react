import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="component">
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
    </div>
  );
};

export default Header;
