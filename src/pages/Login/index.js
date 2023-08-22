import './Login.css';

const Login = () => {
    return(
        <div className='login'>
            <h1>Login</h1>
            <div className='inputBox'>
                <input type="text" required="required"></input>
                <span>Username</span>
            </div>
            <div className='inputBox'>
                <input type="text" required="required"></input>
                <span>Password</span>
            </div>
        </div>
    )
}

export default Login;