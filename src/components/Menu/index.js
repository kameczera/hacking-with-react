import './Menu.css';

const Menu = (props) => {
    let elements = [
        <a className='menu-item' id='home'>Home</a>,
        <a href='http://localhost:3000/champions' className='menu-item' id='champions'>Champion</a>,
        <a className='menu-item' id='leaderboards'>Leaderboards</a>,
        <a className='menu-item' id='games'>Games</a>,
    ]
    console.log(elements[0].props.id);
    console.log(props.selected);
    // elements = elements.map((element) => {
    //     if(props.selected == element.props) return element.props += " selected";
    //     else return element;
    // })

    return(
        <div className='menu'>
            {elements}
        </div>
    )
}

export default Menu;