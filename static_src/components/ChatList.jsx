import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
            <ListItem button>
                <ListItemText style={this.classes.links} primary="Chat 1" />
            </ListItem>
            <ListItem button>
                <ListItemText style={this.classes.links} primary="Chat 2" />
            </ListItem>
            <ListItem button>
                <ListItemText style={this.classes.links} primary="Chat 3" />
            </ListItem>
            <ListItem button>
                <ListItemText style={this.classes.links} primary="Chat 4" />
            </ListItem>
            <ListItem button>
                <ListItemText style={this.classes.links} primary="Chat 5" />
            </ListItem>
            <ListItem button>
                <ListItemText style={this.classes.links} primary="Chat 6" />
            </ListItem>
        </List>
    }
}