import React, { Component } from 'react';
import './register.css'
import axios from 'axios';


export default class Register extends Component {
    state = {
        name: "",
        usernameLogin: "",
        email:"",
        password:"",
        passwordLogin: "",
    }

    handleInput =(event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    register =(e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:4200/users/register',{
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        })
        .then((res) => {
            alert("Registered")
            console.log(res)
        })
        .catch(err => {
            console.log(err);
        })

    }

    login =(e) => {
        e.preventDefault()
        axios.post('http://localhost:4200/users/login', {
            email: this.state.usernameLogin,
            password: this.state.passwordLogin
        })
        .then((res)=> {alert("Signined!"); localStorage.setItem('token', res.data.token); window.location.href = "http://localhost:3000"}).catch(err => console.log(err))
    }
    ru = (e) => {
        console.log(e.target.value)
        this.setState({restaurantUnit : parseInt(e.target.value)})
    }
    render() {

        return(
            <div id="RegisterPage">
                <div id="img"></div>
                <div id="forms">
                    <form id="register" onSubmit={this.register}>
                        <h1>Sign up right now</h1>
                        <br/>
                        <label>Name: </label>
                        <br/>
                        <input type="text" name="name" onChange={this.handleInput} value={this.state.name}
                        placeholder="Name..."/>
                        <br/> <br/>
                        <label>E-mail: </label>
                        <br/>
                        <input type="text" name="email" onChange={this.handleInput} value={this.state.email}
                        placeholder="Email..."/>
                        <br /> <br/>
                        <label>Password: </label>
                        <br/>
                        <input type="password" name="password" onChange={this.handleInput} value={this.state.password}
                        placeholder="* * * * * * * * "/>
                        <br/>                        
                        <button>Sign up</button>
                    </form>
                    <form id="login" onSubmit={this.login}>
                        <h1>... or sign in in if you already have an account</h1>
                        <br />
                        <label>Email: </label>
                        <br/>
                        <input type="text" name="usernameLogin" onChange={this.handleInput} value={this.state.usernameLogin}
                        placeholder="Email..."/>
                        <br />
                        <label>Password: </label>
                        <br/>
                        <input type="password" name="passwordLogin" onChange={this.handleInput} value={this.state.passwordLogin}
                        placeholder="Password..."/>
                        <br />
                        <button>Sign in</button>
                    </form>
                </div>
            </div>
        )
    }
};