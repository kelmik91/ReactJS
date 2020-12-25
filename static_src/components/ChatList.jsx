import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { push } from 'connected-react-router';
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";

class ChatList extends React.Component {
    state = {
        chats: [
            { id: 0, title: 'Chat 1' },
            { id: 1, title: 'Chat 2' },
            { id: 2, title: 'Chat 3' }]
    }

    classes = {
        links: {
            borderRadius: 16,
            border: 'solid 1px black',
            textAlign: 'center'
        }
    }

    handleNavigate = (link) => {
        const chat = '/chat/' + (link + 1)
        this.props.push(chat);
    }

    render() {
        return <List component="nav" aria-label="contacts">
            {this.state.chats.map(chat =>
                <ListItem
                id={chat.id}
                    button
                    key={chat.id + 1}
                    onClick={() => this.handleNavigate(chat.id)}>
                    <ListItemText style={this.classes.links} primary={chat.title} />
                </ListItem>
            )}
        </List>
    }
}

const mapStateToProps = ({ }) => ({ });

const mapDispatchToProps = dispatch => bindActionCreators({ push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);