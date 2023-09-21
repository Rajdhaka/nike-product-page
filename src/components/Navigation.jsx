export default function Navigation() {
  return (
    <div className="navbar">
      <img src="./images/brand_logo.png" alt="logo" className="logo" />
      <ul className="nav-list">
        <li href="#">menu</li>
        <li href="#">location</li>
        <li href="#">about</li>
        <li href="#">contact</li>
      </ul>
      <button className="btn-login">Login</button>
    </div>
  );
}
