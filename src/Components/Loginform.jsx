import { Component } from "react";
import "../Components/loginform.css"

class Loginform extends Component{
    constructor(){
        super();
        this.state={
            username:"",
            emai:"",
            password:""
        }
    }
    handlechange=(e)=>{
     this.setState({[e.target.name]:e.target.value})
     
    }
    render(){
        console.log(this.state)
        return(
            <>
           
            <form className="box">
                <label htmlFor="name">Username:</label>
                <input type="text" placeholder="Enter your name" id="name" name="username" required onChange={this.handlechange}/>
                <label htmlFor="Email">Email:</label>
                <input type="email" placeholder="Enter your email" id="Email" name="email" required onChange={this.handlechange}/>
                <label htmlFor="pswd">Password:</label>
                <input type="password" placeholder="Enter your password" id="pswd" name="password" required onChange={this.handlechange}/>
                <button type="submit">Login</button>
            </form>
           
            </>
        )
    }
}
export default Loginform