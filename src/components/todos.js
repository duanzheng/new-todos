/**
 * Created by Tony on 2017/3/15.
 */
import React, { Component } from 'react';
import CSSModule from 'react-css-modules';
import styles from './list.scss';
import { Input, Alert } from 'antd';

@CSSModule(styles, {allowMultiple: true})
class Todos extends Component {
    render() {
        return (
            <div styleName="container">
                <div>有<strong>2</strong>件准备做的事情</div>
                <Input size="large" placeholder="请输入要做的事情" />
                <ul styleName="list">
                    <li styleName="item">
                        <Alert message="第一件事" type="info" closable/>
                    </li>
                    <li styleName="item">
                        <Alert message="第二件事" type="info" closable/>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Todos;