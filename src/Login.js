import React, {Component} from 'react';
import './login.css'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            auth: {
                username: 'ttn',
                password: 'ttn'
            }
        }
    }

    handleLogin = (e) => {
        // const { username, password } = this.state;
        const {name, value} = e.target;
        this.setState({[name]: value});

    };


    handleSubmit = (e) => {
        e.preventDefault();
        const {username, password, auth} = this.state;
        if (username === auth.username && password === auth.password) {
            this.setState({
                    error: false
                }, () => {
                    this.props.history.push('/todolist');
                    this.props.loginCallback()
                }
            )
        } else {
            this.setState({
                username: '',
                password: '',
            })
        }
    };

    render() {
        // const { username, password } = this.state;
        // const { isAuth } = this.props;

        return (
            <div className="login-page">
                <form className="login-form">
                    <label> Username: </label>
                    <input className="userinput"
                           type="text"
                           placeholder="enter username"
                           onChange={this.handleLogin} required
                           name="username"
                    />

                    <label> Password: </label>
                    <input className="userinput"
                           type="password"
                           placeholder="enter password"
                           onChange={this.handleLogin} required
                           name="password"
                    />

                    <input className="login-btn"
                           type="button"
                           onClick={this.handleSubmit}
                           value='Login'
                    />
                </form>
            </div>
        );
    }
}

export default Login;
