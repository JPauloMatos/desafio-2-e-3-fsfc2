import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { FunctionComponent } from "react";

export const Navbar: FunctionComponent = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">Imersão Full Cycle - 2.0</Typography>
            </Toolbar>
        </AppBar>
    );
};