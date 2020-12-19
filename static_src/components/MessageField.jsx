import React from "react";
import Message from './Message.jsx';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import { sendMessage } from './../actions/messageActions.js'


class MessageField extends React.Component {
    state = {
        newMessage: ''
    };

    handleChange = e => this.setState({ newMessage: e.target.value });

    sendRobot = (message) => {
        const response = 'Я повторяю за тобой: ' + message;
        const {chatId} = this.props;
        this.props.sendMessage((chatId), 'Robot', response);
        this.setState(
            {chats: {...this.props.chats, 
                [chatId]: {...this.props.chats[chatId], 
                    messages:  [...this.props.chats[chatId].messages, { 
                        id: this.props.chats[this.props.chatId].messages.length + 1, 
                        name: 'Robot', 
                        text: response 
                    }] } },
            newMessage: ''
            },
            () => {
                console.log("state updated. robot response!");
            }
        );
    }

    send = () => {
        event.preventDefault();
        const {messages} = this.state;
        const {chatId} = this.props;
        this.props.sendMessage((chatId), 'User', this.state.newMessage);
        this.setState(
            {chats: {...this.props.chats, 
                [chatId]: {...this.props.chats[chatId], 
                    messages:  [...this.props.chats[chatId].messages, { 
                        id: this.props.chats[this.props.chatId].messages.length + 1, 
                        name: 'User', 
                        text: this.state.newMessage 
                    }] } },
            newMessage: ''
            },
            () => {
                this.sendRobot(this.props.chats[this.props.chatId].messages[this.props.chats[this.props.chatId].messages.length - 1].text);
                console.log("state updated! User response");
            }
        );
    }

    handleKeyUp = () => {
        if (event.keyCode === 13) { // Enter
            this.send()
        }
    };

    render() {
        return ( 
            <Grid container
            direction="column"
            justify="space-between"
            alignItems="stretch"
            style= {{height:'40vw'}}
            >
                <Grid item>
                    {console.log(this.props)}
                <h2>Chat {this.props.chatId}</h2>
                <Message messages={this.props.chats[this.props.chatId].messages} />
                
                </Grid>
                <Grid item>
                <hr />
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="space-between"
                    alignItems="flex-end"
                >
                    <Grid item xs={10}>
                        <TextField
                            label="Message"
                            variant="outlined"
                            style={{ fontSize: '22px' }}
                            fullWidth={true}
                            onChange={this.handleChange}
                            value={this.state.newMessage}
                            onKeyUp={this.handleKeyUp} />
                    </Grid>
                    <Grid item xs={2}>
                        <Button
                            style={{
                                fontSize: '24px'
                            }}
                            variant="contained"
                            color="primary"
                            onClick={this.send}
                        >
                            Send
                        </Button>
                    </Grid>
                    </Grid>
                </Grid>
                </Grid>
            
        )
    }
}

const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
 });
 
 const mapDispatchToProps = dispatch => bindActionCreators({sendMessage}, dispatch);
 
 export default connect(mapStateToProps, mapDispatchToProps)(MessageField);
