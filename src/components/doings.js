/**
 * Created by Tony on 2017/3/15.
 */
import React, { Component } from 'react';
import CSSModule from 'react-css-modules';
import styles from './list.scss';
import { Alert } from 'antd';

@CSSModule(styles, {allowMultiple: true})
class Doings extends Component {
    render() {
        return (
            <div styleName="container">
                <span>有<strong>1</strong>件正在做的事情</span>
                <ul styleName="list">
                    <li styleName="item">
                        <Alert message="第一件事" type="success" closable/>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Doings;