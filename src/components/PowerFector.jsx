import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function PowerFector() {
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={5} columnSpacing={{ xs: 3 }}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Card sx={{ width: "100%", p: "15px 0" }} >
                        <CardContent style={{ textAlign: "center" }} className='power_fector'>
                            <Typography gutterBottom variant="h5" component="div">$ 177.278</Typography>
                            <Typography variant="body2" color="text.secondary">AVERAGE POWER FACTOR</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Card sx={{ width: "100%", p: "15px 0" }}>
                        <CardContent style={{ textAlign: "center" }} className='power_fector'>
                            <Typography gutterBottom variant="h5" component="div">$ 199.350</Typography>
                            <Typography variant="body2" color="text.secondary">HIGHEST THIS MONTH</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}