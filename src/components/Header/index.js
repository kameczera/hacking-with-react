import "./Header.css";

const Header = () => {
  return (
    <div className="header">
        <div className="buttons selectGame">
            <button className="game lol" id="header-selected">League of Legends</button>
            <button className="game valorant">Valorant</button>
        </div>
        <div className="buttons config">
            <button className="configs login"><a href="http://localhost:3000/login">Login</a></button>
            <button className="configs switchMode"><img className="sunImage" src="/assets/images/sun.png"></img></button>
        </div>
    </div>
  );
};

export default Header;
