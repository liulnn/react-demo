import React from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {cyan500} from 'material-ui/styles/colors';

import MyComponent from './MyComponent';

const muiTheme = getMuiTheme({
    palette: {
        textColor: cyan500,
    },
    appBar: {
        height: 50,
    },
});


export default React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext: function() {
        return {
            muiTheme: muiTheme
        };
    },
    render() {
        return (
            <div>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <MyComponent />
                </MuiThemeProvider>
                {this.props.children}
            </div>
        )
    }
})
