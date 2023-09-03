import * as React from 'react';
import { Box } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import TableChartIcon from '@mui/icons-material/TableChart';
import Chart from './Chart';
import Tablesew from './Tablesew';
import { getData } from '../utils/constant'
import Paper from '@mui/material/Paper';
import { Divider } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { Typography } from '@mui/material';

export default function Tabsew() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const data = getData();

    return (
        <Box>
            <Paper elevation={3} >
                <Box sx={{ typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box className="tabbtn_wrapper">
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab icon={<InsertChartIcon />} value="1" />
                                <Tab icon={<TableChartIcon />} value="2" />
                            </TabList>
                            <div>Period: Dec 2018 To Nov 2019</div>
                        </Box>
                        <TabPanel value="1">
                            <Tablesew data={data} />
                        </TabPanel>
                        <TabPanel value="2">
                            <Chart data={data} />
                        </TabPanel>
                    </TabContext>
                </Box>
                <Divider />

                <Box className='exportExcel'>
                    <DownloadIcon color="primary" />
                    <Typography variant="span" component="span">Export to Excel</Typography>
                </Box>
            </Paper>
        </Box>
    );
}