import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const savingsData = [
  {
    title: "Summer Discount Plan",
    description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
  },
  {
    title: "Spring Savings Plan",
    description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
  },
  {
    title: "Winter Savings Plan",
    description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
  },
];

export default function Cardsew() {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h6" component="h6" style={{ color: "#448EE4", marginBottom: "10px" }}>
        Recommended Saving Programs For You
      </Typography>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 3 }}>
        {savingsData.map((data, index) => (
          <Grid item key={index} xs={12} sm={12} md={6} lg={4}>
            <Card sx={{ width: "100%" }}>
              <CardMedia
                sx={{ height: 140 }}
                image={data.image}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" style={{ color: "#448EE4" }}>
                  {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}