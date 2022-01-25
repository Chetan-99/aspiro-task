import React from "react";
import traveller from "../assets/Traveller1.png";
import "./fonts.css";
import decore from "../assets/Decore.png";
import playbtn from "../assets/Playbtn.png";
import { Grid } from "@mui/material";

function Home(props) {
  return (
    <Grid container>
      <Grid item lg={4} xs={12} md={12}>
        <Grid container>
          <Grid
            item
            lg={12}
            style={{ marginTop: "130px", marginLeft: "150px" }}
          >
            <div className="home_orange">
              Best Destinations around the world
            </div>
          </Grid>
          <Grid item lg={12}>
            <div style={{ postion: "relative" }}>
              <div
                className="home_main"
                style={{
                  marginLeft: "150px",
                  marginTop: "24px",
                  position: "absolute",
                }}
              >
                Travel, enjoy and live a new and full life
              </div>
              <div>
                <img
                  src={decore}
                  alt="Styling"
                  style={{
                    zIndex: -1,
                    marginLeft: "390px",
                    marginTop: "93px",
                    position: "absolute",
                  }}
                />
              </div>
            </div>
          </Grid>
          <Grid item lg={12} style={{ marginTop: "330px" }}>
            <div
              className="home_black"
              style={{ marginLeft: "150px", marginTop: "" }}
            >
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </div>
          </Grid>
          <Grid item lg={12}>
            <Grid container style={{ marginTop: "30px", marginLeft: "150px" }}>
              <Grid item lg={4}>
                <button
                  className="home_btn1"
                  onClick={() => console.log("Clicked")}
                >
                  Find out More
                </button>
              </Grid>
              <Grid item lg={8} style={{ marginTop: "-10px" }}>
                <Grid container>
                  <Grid item lg={4}>
                    <img
                      src={playbtn}
                      alt="Play button"
                      style={{ marginLeft: "20px" }}
                    ></img>
                  </Grid>
                  <Grid item lg={8}>
                    <div
                      className="home_black"
                      style={{
                        color: "#686D77",
                        fontWeight: "500",
                        fontSize: "17px",
                        lineHeight: "25px",
                        marginLeft: "15px",
                        marginTop: "26px",
                      }}
                    >
                      Play Demo
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={8}>
        <img
          src={traveller}
          style={{
            marginLeft: "80px",
            userSelect: "none",
            marginTop: "15px",
          }}
          alt="Girl Traveller on a bag"
        ></img>
      </Grid>
    </Grid>
  );
}

export default Home;
