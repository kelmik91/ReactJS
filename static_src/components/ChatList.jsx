import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

export default class ChatList extends React.Component {
    classes = {
        links: {
            borderRadius: 16,
            border: 'solid 1px black',
            textAlign: 'center'
        }
    }

    render() {
        return <List component="nav" aria-label="contacts">
            <Link to='/chat/1/'>
                <ListItem button>
                    <ListItemText style={this.classes.links} primary="Chat 1" />
                </ListItem>
            </Link>
            <Link to='/chat/2/'>
                <ListItem button>
                    <ListItemText style={this.classes.links} primary="Chat 2" />
                </ListItem>
            </Link>
            <Link to='/chat/3/'>
                <ListItem button>
                    <ListItemText style={this.classes.links} primary="Chat 3" />
                </ListItem>
            </Link>

        </List>
    }
}