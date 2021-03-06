import { useEffect, useState } from 'react';
import Grid from "@material-ui/core/Grid/Grid";
import { Navbar } from './Navbar';
import CustomizedTables from './tables';
import { Route } from '../utils/models';
import { SettingsRounded } from '@material-ui/icons';

const API_URL = process.env.REACT_APP_API_URL as string;

type Props = {

};


export const Mapping = (props: Props) => {
    
    const [ routes, setRoutes ] = useState<Route[]>([]);

    useEffect(() => {
        fetch(`${API_URL}/routes`)
        .then((data) => data.json())
        .then((data) => setRoutes(data));
    }, []);

    return <Grid container>
        <Grid item xs={12}>
            <Navbar/>
        </Grid>
        <Grid item xs={12}>
            {CustomizedTables(routes)}
        </Grid>
    </Grid>;
};
