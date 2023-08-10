import "./Header.css";

const Header = () => {
  return (
    <div className="header">
        <div className="buttons selectGame">
            <button className="game lol">League of Legends</button>
            <button className="game valorant">Valorant</button>
        </div>
        <div className="buttons config">
            <button className="login">Login</button>
            <button className="switchMode"><img className="sunImage" src="/assets/images/sun.png"></img></button>
        </div>
    </div>
  );
};

export default Header;
