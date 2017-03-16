/**
 * Created by Tony on 2017/3/15.
 */
import React, { Component, propTypes } from 'react';
import CSSModule from 'react-css-modules';
import styles from './mainContainer.scss';
import Todos from './todos';
import Doings from './doings';
import Dones from './dones';

@CSSModule(styles, { allowMultiple: true })
class MainContainer extends Component {
    render() {
        return (
            <div styleName="container">
                <Todos></Todos>
                <Doings></Doings>
                <Dones></Dones>
            </div>
        )
    }
}

export default MainContainer;