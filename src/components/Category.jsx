import React from "react";
import { Grid } from "@mui/material";
import ServicesBox from "./ServicesBox";
import stars from "../assets/Group4.png";
import box1 from "../assets/Group48.png";
import box2 from "../assets/Group49.png";
import box3 from "../assets/Group50.png";
import box4 from "../assets/Group51.png";

function Category(props) {
  return (
    <>
      <Grid container height="300px">
        <Grid item lg={10}>
          <Grid container>
            <Grid item lg={12}>
              <div
                className="home_black"
                style={{
                  marginLeft: "652px",
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "27px",
                }}
              >
                CATEGORY
              </div>
              <div
                className="category_main"
                style={{ marginTop: "-50px", marginLeft: "428px" }}
              >
                We Offer Best Services
              </div>
            </Grid>
            <Grid item lg={12}></Grid>
          </Grid>
        </Grid>
        <Grid item lg={2}>
          <img style={{ marginLeft: "30px" }} src={stars} alt="Stars Design" />
        </Grid>
      </Grid>
      <Grid container spacing={8} marginLeft="40px">
        <Grid item>
          <ServicesBox
            imagePath={box1}
            title="Calculated Weather"
            content="Built Wicket longer admire do barton vanity itself do in it."
          />
        </Grid>
        <Grid item>
          <div className="category_select">
            <ServicesBox
              imagePath={box4}
              imgStyle={{ marginTop: "-27px" }}
              title="Best Flights"
              content="Engrossed listening. Park gate sell they west hard for the."
            />
          </div>
          <div className="category_select_effect"></div>
        </Grid>
        <Grid item>
          <ServicesBox
            imagePath={box3}
            title="Local Events"
            content="Barton vanity itself do in it. Preferd to men it engrossed listening. "
          />
        </Grid>
        <Grid item>
          <ServicesBox
            imagePath={box2}
            contentStyle={{ marinTop: "100px" }}
            title="Customization"
            content="We deliver outsourced aviation services for military customers"
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Category;
