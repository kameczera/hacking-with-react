import './Menu.css';

const Menu = (props) => {
    let elements = [
        {nome: "Home", link: "http://localhost:3000"},
        {nome: "Champions", link: "http://localhost:3000/champions"},
        {nome: "Builds", link: "http://localhost:3000/builds"},
    ]

    return(
        <div className='menu'>
            {elements.map((element) => {
                if(props.selected == element.nome) return <button className='menu-button'><a className="menu-item" id='menu-selected' href={element.link}>{element.nome}</a></button>;
                else return <button className='menu-button'><a className="menu-item" href={element.link}>{element.nome}</a></button>;
            })}
        </div>
    )
}

export default Menu;