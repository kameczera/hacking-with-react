import './Header.css'

const Header = () => {
    return(
        <div className='header'>
            <input className='searchMusic'></input>
            <div className='buttons'>
                <button className='button signup'>Sign up</button>
                <button className='button login'>Login</button>
            </div>
        </div>
    )
}

export default Header;