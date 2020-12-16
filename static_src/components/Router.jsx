import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MessageField from './MessageField.jsx'

export default class Router extends React.Component {
    // static propTypes = {
    //     chatId: propTypes.Number,
    // };
    
    static defaultProps = {
        chatId: 1,
    };

    render() {
        return (
            <Switch>
                <Route exact path='/' 
                    render={() => <MessageField chatId={this.props.chatId} />} />
                <Route exact path='/chat/:chatId/' 
                    render={(obj) => <MessageField chatId={ Number(obj.match.params.chatId)} />} />
            </Switch>
        )
    }
}