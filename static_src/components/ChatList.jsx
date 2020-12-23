import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import { push } from 'connected-react-router';

export default class ChatList extends React.Component {
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

    rendChats = (chat) => {
        const path = '/chat/' + (chat.id + 1);
        console.log(chat);

        return <Link to={path}>
        <ListItem
            button
            key={chat.id+1}
            onClick={() => push(path)}>
            <ListItemText style={this.classes.links} primary={chat.title} />
        </ListItem>
        </Link>
    }

    render() {
        return <List component="nav" aria-label="contacts">
            {this.state.chats.map(chat =>
                <div key={chat.id}>{
                    this.rendChats(chat)}
                </div>
            )}
        </List>
    }
}
