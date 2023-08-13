import './Main.css';

const Main = () => {
    return(
        <div className='main'>
            <div className='inputMain'>
                <div className='valuesPlayer'>
                    <p className='label region'>Region</p>
                    <select className='main-input input-region'>
                        <option value="brazil">Brazil</option>
                        <option value="korea">Korea</option>
                        <option value="euw">Europe West</option>
                        <option value="na">North America</option>
                    </select>
                </div>
                <div className='valuesPlayer'>
                    <p className='label name'>Search</p>
                    <input className='main-input input-name' placeholder="Name1, Name2..."></input>
                </div>
                <button className='buttonSearchPlayer'></button>
            </div>
        </div>
    )
}
export default Main;