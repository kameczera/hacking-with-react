import './ChampionBox.css';

const ChampionBox = (props) => {
    const link = "http://ddragon.leagueoflegends.com/cdn/13.16.1/img/champion/" + props.name + ".png";
    return(
        <tr className="championBox">
            <td>1</td>
            <td className='champion'>
                <img className="championImage" src={link}></img>
                <p className="championName">{props.name}</p>
            </td>
            <td>oi</td>
        </tr>
    )
}

export default ChampionBox;