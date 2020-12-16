import React from "react";
import Message from './Message.jsx';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default class MessageField extends React.Component {
    state = {
        chats:{
            1: {messages: [
                { id: 0, name: 'User', text: 'message1 0' },
                { id: 1, name: 'User', text: 'message1 1' },
                { id: 2, name: 'User', text: 'message1 2' },
                { id: 3, name: 'User', text: 'message1 3' }]
            },
            2: {messages: [
                { id: 0, name: 'User', text: 'message2 0' },
                { id: 1, name: 'User', text: 'message2 1' },
                { id: 2, name: 'User', text: 'message2 2' },
                { id: 3, name: 'User', text: 'message2 3' }]
            },
            3: {messages: [
                { id: 0, name: 'User', text: 'message3 0' },
                { id: 1, name: 'User', text: 'message3 1' },
                { id: 2, name: 'User', text: 'message3 2' },
                { id: 3, name: 'User', text: 'message3 3' }]
            },
        },
        newMessage: ''
    };

    handleChange = e => this.setState({ newMessage: e.target.value });

    sendRobot = (message) => {
        const response = 'Я повторяю за тобой: ' + message;
        const {chatId} = this.props;
        this.setState(
            {chats: {...this.state.chats, 
                [chatId]: {...this.state.chats[chatId], 
                    messages:  [...this.state.chats[chatId].messages, { 
                        id: this.state.chats[this.props.chatId].messages.length + 1, 
                        name: 'Robot', 
                        text: response 
                    }] } },
            newMessage: ''
            },
            () => {
                console.log("state updated. robot response!");
            }
        )
    }

    send = () => {
        event.preventDefault();
        const {messages} = this.state;
        const {chatId} = this.props;
        this.setState(
            {chats: {...this.state.chats, 
                [chatId]: {...this.state.chats[chatId], 
                    messages:  [...this.state.chats[chatId].messages, { 
                        id: this.state.chats[this.props.chatId].messages.length + 1, 
                        name: 'User', 
                        text: this.state.newMessage 
                    }] } },
            newMessage: ''
            },
            () => {
                this.sendRobot(this.state.chats[this.props.chatId].messages[this.state.chats[this.props.chatId].messages.length - 1].text);
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
            {/* <div > */}
                <Grid item>
                <h2>Chat {this.props.chatId}</h2>
                <Message messages={this.state.chats[this.props.chatId].messages} />
                
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
                {/* </div> */}
                </Grid>
            
        )
    }
}
