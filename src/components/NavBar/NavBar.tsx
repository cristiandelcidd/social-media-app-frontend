const NavBar = () => {
  return (
    <div className="flex justify-between align-middle m-4">
      <img src="/src/favicon.png" alt="Facebook" width={50} />
      <ul className="flex space-x-2 align-middle">
        <a href="#">
          <li>Home</li>
        </a>
        <a href="#">
          <li>Profile</li>
        </a>
        <a href="#">
          <li>Log In</li>
        </a>
      </ul>
    </div>
  );
};

export default NavBar;
