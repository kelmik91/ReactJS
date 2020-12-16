import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return <h1>
            <Link to='/'>
                Курс по ReactJS
            </Link>
        </h1>
    }
}