import { Grid } from "@mui/material";
import Background from "./components/Background.jsx";
import Category from "./components/Category.jsx";
import Header from "./components/Header_C";
import Home from "./components/Home.jsx";
import TopSelling from "./components/TopSelling.jsx";

function App() {
  return (
    <Grid container>
      <Grid item xs={12} md={12} lg={12}>
        <Background />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Header />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Home />
      </Grid>
      <Grid item xs={12} md={12} lg={12} marginTop="100px">
        <Category />
      </Grid>
      <Grid item xs={12} md={12} lg={12} marginTop="100px">
        <TopSelling />
      </Grid>
    </Grid>
  );
}

export default App;
