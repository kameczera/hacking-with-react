import './ChampionButton.css';

const ChampionButton = (props) => {
    const link = "http://ddragon.leagueoflegends.com/cdn/13.16.1/img/champion/" + props.name + ".png";
    return(
        <a className='link-champion'>
            <img className="a-championImage" src={link}></img>
            <p className="a-championName">{props.name}</p>
        </a>
    )
}

export default ChampionButton;