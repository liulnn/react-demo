import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

import NavLink from './NavLink'

import {IndexLink} from 'react-router';

export default React.createClass({

    getInitialState: function () {
        return {open: false};
    },

    handleToggle: function () {
        this.setState({open: !this.state.open});
    },

    render(){
        return (
            <div>
                <AppBar
                    title="Admin"
                    iconElementLeft={<IconButton><NavigationMenu /></IconButton>}
                    onTouchTap={this.handleToggle}
                />
                <Drawer open={this.state.open}>
                    <AppBar
                        title="Admin"
                    />
                    <MenuItem
                        linkButton={true}
                        containerElement={<NavLink to="/about" activeStyle={{ color: 'red' }} activeClassName="active">About</NavLink>}
                        primaryText="About"
                    />
                    <MenuItem
                        linkButton={true}
                        containerElement={<NavLink to="/repos" activeStyle={{ color: 'red' }} activeClassName="active">Repos</NavLink>}
                        primaryText="Repos"
                    />
                    <MenuItem
                        linkButton={true}
                        containerElement={<IndexLink to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</IndexLink>}
                        primaryText="Home"
                    />
                </Drawer>
            </div>

        )
    }
});
