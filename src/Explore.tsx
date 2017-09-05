import * as React from 'react';
import './css/explore.css';

class Explore extends React.Component {
    network: {};
    constructor(props: {}) {
        super(props);
        this.props = props;
        this.network = require('./json/explore_network.json');
    }

    render() {
        return (
        <div className="section" id="explore">
            <div className="container">
                <div className="title">Explore</div>
                <div className="content"> 
                    
                </div>
            </div>
        </div>);
    }
}

export default Explore;