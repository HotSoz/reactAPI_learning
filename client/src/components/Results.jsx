import React from 'react';
import ResultBackground from '../styles/Results.style';
 
class Results extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    
    render() {
        return(
            <ResultBackground>
                Hello World!
            </ResultBackground>
        )
    }
}

export default Results;