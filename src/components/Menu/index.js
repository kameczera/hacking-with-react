import './Menu.css';

const Menu = () => {
    return(
        <div className='menu'>
            <a className='menu-item' id='menu-selected'>Home</a>
            <a className='menu-item'>Champion</a>
            <a className='menu-item'>Leaderboards</a>
            <a className='menu-item'>Games</a>
        </div>
    )
}

export default Menu;