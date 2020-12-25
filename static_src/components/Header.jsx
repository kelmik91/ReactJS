import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default class Header extends React.Component {
    render() {
        return <Grid
            container
            spacing={4}
            direction="row"
            justify="space-evenly"
            alignItems="center"
        >
            <Grid item>
                <Link to='/'>
                    <ListItem button>
                        <ListItemText style={{ textAlign: 'center' }} primary='Курс по ReactJS' />
                    </ListItem>
                </Link>
            </Grid>
            <Grid item>
                <Link to='/profile/'>
                    <ListItem button>
                        <ListItemText style={{ textAlign: 'center' }} primary='Profile' />
                    </ListItem>
                </Link>
            </Grid>
        </Grid>
    }
}