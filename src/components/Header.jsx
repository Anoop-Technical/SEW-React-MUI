import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as React from 'react';
import { Box, Divider } from '@mui/material';

const Header = () => {
    const [name, setName] = React.useState('JOE DOE');
    const handleChange = (event) => {
        setName(event.target.value);
    };
    return (
        <>
            <Box sx={{ minHeight: "130px" }} />
            <AppBar position="fixed" sx={{ backgroundColor: '#fff', color: "#000" }}>
                <Toolbar>
                    <Grid container alignItems="center" justifyContent="space-between" gap="20px">
                        <div className="left">
                            <Grid item>
                                <Typography variant="h5" component="div" style={{ color: '#448EE4', fontWeight: "bold" }}>Logo</Typography>
                            </Grid>
                        </div>
                        <div className="right">
                            <Grid item>
                                <Avatar src="/broken-image.jpg" sx={{ width: "25px", height: "25px", backgroundColor: '#448EE4' }} />
                            </Grid>
                            <Grid item>
                                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                    <Select
                                        labelId="demo-select-small-label"
                                        id="demo-select-small"
                                        value={name}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="JOE DOE">JOE DOE</MenuItem>
                                        <MenuItem value={10}>ANOOP</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <Badge badgeContent={4} color="primary">
                                    <NotificationsIcon color="action" />
                                </Badge>
                            </Grid>
                            <Grid item>
                                <IconButton
                                    color="gray"
                                    aria-label="Notifications"
                                >
                                    <DashboardIcon />
                                </IconButton>
                            </Grid>
                        </div>
                    </Grid>
                </Toolbar>
                <Divider />
                <Toolbar>
                    <Typography variant="h5" component="div" style={{ color: 'gray', fontWeight: "bold" }}>Power Quality</Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header