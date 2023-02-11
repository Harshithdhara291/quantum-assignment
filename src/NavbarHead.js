import React,{ Component} from "react";
import './NavbarHead.css'

export default class NavbarHead extends Component{
    state={show:true}
    render(){
        return(
        <nav className="navbar navbar-expand-md navbar-light bg-white">
            <div className="container">
                <a className="navbar-brand anchor" href="#">
                <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-logo-design-template-78655edda18bc1196ab28760f1535baa_screen.jpg?ts=1617645324" alt="business-img" className="logo-image"/> 
                <h1 className="bisnes">Bisnes</h1>
                </a>
                <button className="navbar-toggler border border-dark" type="button" 
                onClick={()=>{ this.setState({show:!this.state.show})}}>
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className={this.state.show ? "collapse navbar-collapse" : "collapse navbar-collapse active"}>
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <a className="nav-link text-danger fw-bold" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link fw-bold" href="#">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link fw-bold" href="#">Project</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link fw-bold" href="#">Blog</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link fw-bold" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link fw-bold" href="#">Contact</a>
                    </li>
                  </ul>
            </div>
          </div>
        </nav>
                )
            }
        }