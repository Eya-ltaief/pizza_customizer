import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
const Header = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar>
                <Toolbar>
                    <Typography variant="h6">Customize you own PIZZA !</Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Header
