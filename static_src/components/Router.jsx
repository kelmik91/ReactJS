import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MessageField from './MessageField.jsx'
import Profile from './Profile.jsx';
import ErrorPage from './ErrorPage.jsx';
import connect from "react-redux/es/connect/connect";
import { bindActionCreators } from "redux";
import { sendMessage } from "../actions/messageActions";
import { profile } from '../actions/profileActions'

class Router extends React.Component {

    static defaultProps = {
        chatId: 1,
    };

    render() {
        return (
            <Switch>
                <Route exact path='/'
                    render={() => <MessageField
                        chatId={this.props.chatId}
                        sendMessage={sendMessage}
                    />} />
                <Route exact path='/chat/:chatId/'
                    render={(obj) => <MessageField
                        chatId={Number(obj.match.params.chatId)}
                        sendMessage={sendMessage}
                    />} />
                <Route exact path='/profile/'
                    render={() => <Profile />} />
                <Route component={ErrorPage} />
            </Switch>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage, profile }, dispatch);

export default connect(null, mapDispatchToProps)(Router);
