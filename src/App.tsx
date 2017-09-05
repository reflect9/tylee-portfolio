import * as React from 'react';
import './css/App.css';

// import Explore from './Explore';

class App extends React.Component {
  constructor(props:{}){
    super(props);
    this.props = props;
    this.state = {
      "role": null
    };
  }
  renderProblems() {
    if(this.state["role"]=="UX Designer") {
      return (<div className="problems">
          <ul>
            <li>UX Designer Problems </li>
          </ul>
        </div>
      );
    } else if(this.state["role"]=="UX Researcher") {
      return (<div className="problems">
          <ul>
            <li>UX Researcher Problems</li>
          </ul>
        </div>
      );
    } else if(this.state["role"]=="Front-end Developer") {
      return (<div className="problems">
          <ul>
            <li>Front-end Developer Problems</li>
          </ul>
        </div>
      );
    } else if(this.state["role"]=="Data Scientist") {
      return (<div className="problems">
          <ul>
            <li>Data Scientist Problems</li>
          </ul>
        </div>
      );
    } else {
      return <div className="problems">Choose one of the above roles to see details.</div>
    }
  }
  render() {
    return (
      <div className="App">
        <div className="header">
            <div className="container">
                <span className="pageTitle">Tak Yeon Lee</span>
                <div className="nav_right">
                    <a className="nav section" >explore</a> 
                    <a className="nav section" >resume</a> 
                    <a className="nav section" >contact</a> 
                </div>
            </div>
        </div>
        <div className="section" id="about">
          <div className="container">
            {/* <div className="title">About me</div> */}
            <div className="content">
                I design, build, and test systems for Human-AI interaction. Multi-displinary problems 
                that I solve include collecting high-quality data from crowd, explaining AI to 
                non-technical people, and coupling human minds and AI to solve challenging problems. 
                Here are roles that I played in my previous projects.
            </div>
          </div>
        </div>
        <div className="section" id="roles">
          <div className="container">
            <div className="content">
                <button className="role" onClick={()=>{this.setState({"role":"UX Designer"})}}>UX Designer</button>
                <button className="role" onClick={()=>{this.setState({"role":"UX Researcher"})}}>UX Researcher</button>
                <button className="role" onClick={()=>{this.setState({"role":"Front-end Developer"})}}>Front-end Developer</button>
                <button className="role" onClick={()=>{this.setState({"role":"Data Scientist"})}}>Data Scientist</button>
                {this.renderProblems()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// BELOW IS HOW TO USE require to add img tag
// const logo = require('./logo.svg');
// <img src={logo} className="App-logo" alt="logo" />

// Boilerplat for new module
// 
// import * as React from 'react';
// // import './css/Explore.css';

// class Explore extends React.Component {
//   render() {
//     return (
//     <div></div>);
//   }
// }

// export default Explore;