import './ChampionButton.css';

const ChampionButton = (props) => {
    const link = "http://ddragon.leagueoflegends.com/cdn/13.16.1/img/champion/" + props.name + ".png";
    return(
        <button className='bt-champion'><img className="championImage" src={link}></img>
        <p className="championName">{props.name}</p></button>
    )
}

export default ChampionButton;