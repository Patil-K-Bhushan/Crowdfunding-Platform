import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="logo-container">
        <img className="logo" alt="Web-Logo" src="" />
      </div>

      <div className="nav-items">
        <ul className="nav-links">
          <li>Home</li>
          <li>Campaigns</li>
          <li>Events</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>
            <details>
              <summary>Individual Givings</summary>
              <ul>
                <li>Fundraising Campaign</li>
                <li>Donate Now</li>
                <li>View Donors</li>
              </ul>
            </details>
          </li>
        </ul>

        {/* Search Bar Added Here */}
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <button className="search-btn">🔍</button>
        </div>

        <button className="auth-button">SignUp</button>
      </div>
    </div>
  );
};

export default Header;