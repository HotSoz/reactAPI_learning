import React from 'react';
import { TitleStyle, TitleHeader } from '../styles/MainTitle.style';

class MainTitle extends React.Component {
    constructor () {
        super();
        this.state = {};
    }

    render() {
        return (
            <TitleStyle>
                <TitleHeader>Know Your Pokemon</TitleHeader>
            </TitleStyle>
        )
    }
}

export default MainTitle;