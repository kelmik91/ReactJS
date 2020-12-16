import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';

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
                <h3>Курс по ReactJS</h3>
                </ListItem>
            </Link>
            </Grid>
            <Grid item>
            <Link to='/profile/'>
            <ListItem button>
                <h4>Profile</h4>
                </ListItem>
            </Link>
            </Grid>
        </Grid>
    }
}