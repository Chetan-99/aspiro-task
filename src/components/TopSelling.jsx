import { Grid } from "@mui/material";
import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import nav from "../assets/navigation1.png";
import decore1 from "../assets/decore1.png";

function TopSelling({ props }) {
  return (
    <>
      <Grid container>
        <Grid item lg={12} textAlign="center">
          <div
            style={{
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "27px",
              userSelect: "none",
              fontFamily: "Poppins",
              lineHeight: "27px",
              color: "#5E6282",
            }}
          >
            Top Selling
          </div>
        </Grid>
        <Grid item lg={12} textAlign="center">
          <div className="category_main">Top Destinations</div>
        </Grid>
        <Grid container spacing={5} marginLeft="10%" marginTop="1%">
          <div className="sellingDecore">
            <img src={decore1} alt="Design" />
          </div>
          <Grid item>
            <SellingBox
              imgPath={img1}
              title="Rome, Italy"
              data1="$5,42k"
              data2="10 Days Trip"
            />
          </Grid>
          <Grid item>
            <SellingBox
              imgPath={img2}
              title="London, UK"
              data1="$4,2k"
              data2="12 Days Trip"
            />
          </Grid>
          <Grid item>
            <SellingBox
              imgPath={img3}
              title="Full Europe"
              data1="$15k"
              data2="28 Days Trip"
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

function SellingBox({ imgPath, title, data1, data2 }) {
  return (
    <>
      <Grid container width="315px" height="457px">
        <Grid item lg={12}>
          <img src={imgPath} alt={title} style={{ zIndex: -1 }} />
        </Grid>
        <div className="sellingImageBox">
          <div style={{ marginTop: "30px" }}>
            <span className="sellingImageText" style={{ marginLeft: "20px" }}>
              {" "}
              {title}
            </span>
            <span className="sellingImageText" style={{ marginLeft: "100px" }}>
              {" "}
              {data1}{" "}
            </span>
          </div>
          <div
            style={{
              marginLeft: "15px",
              marginTop: "15px",
            }}
          >
            <span style={{ marginRight: "7px" }}>
              <img src={nav} alt="nav" />
            </span>
            <span className="sellingImageText" style={{ marginBottom: "10px" }}>
              {data2}
            </span>
          </div>
        </div>
      </Grid>
    </>
  );
}

export default TopSelling;
