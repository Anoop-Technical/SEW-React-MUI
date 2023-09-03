import Cardsew from './components/Cardsew'
import Footer from './components/Footer';
import Header from './components/Header';
import PowerFector from './components/PowerFector';
import Tabsew from './components/Tabsew'
import Grid from '@mui/material/Grid';
const App = () => {
  return (
    <>
      <Header />
      <div className="main_wrapper">
        <Grid container spacing={5} className="app_wrapper">
          <Grid item xs={12} md={10} lg={10} m="40px auto 0px">
            <PowerFector />
          </Grid>
          <Grid item xs={12} md={10} lg={10} m="auto">
            <Tabsew />
          </Grid>
          <Grid item xs={12} md={10} lg={10} m="auto" >
            <Cardsew />
          </Grid>
          <Grid item xs={12} md={10} lg={10} m="auto" >
            <Footer />
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default App