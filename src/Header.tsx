import * as React from 'react';
import './css/Header.css';

class Header extends React.Component {
  render() {
    return (
    <div className="header">
        <div className="container">
            <span className="pageTitle">Tak Yeon Lee</span>
            <div className="nav_right">
                <a className="nav section" >explore</a> 
                <a className="nav section" >resume</a> 
                <a className="nav section" >contact</a> 
            </div>
        </div>
    </div>);
  }
}

export default Header;
