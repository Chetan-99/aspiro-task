import React from "react";
import "./fonts.css";
import { Grid } from "@mui/material";
import vector1 from "../assets/Vector1.png";
import logo from "../assets/Logo.png";

function Header_C(props) {
  return (
    <Grid container>
      <Grid item lg={3}>
        <HeaderJadoo style={{ marginTop: "48px", marginLeft: "140px" }} />
      </Grid>
      <Grid item lg={8}>
        <div style={{ marginTop: "56px", marginLeft: "150px" }}>
          <button
            onClick={() => console.log("Clicked")}
            className="header_btn1"
            style={{ marginRight: "50px" }}
          >
            Destinations
          </button>
          <button
            onClick={() => console.log("Clicked")}
            className="header_btn1"
            style={{ marginRight: "50px" }}
          >
            Hotels
          </button>
          <button
            onClick={() => console.log("Clicked")}
            className="header_btn1"
            style={{ marginRight: "50px" }}
          >
            Flights
          </button>
          <button
            onClick={() => console.log("Clicked")}
            className="header_btn1"
            style={{ marginRight: "50px" }}
          >
            Bookings
          </button>
          <button
            onClick={() => console.log("Clicked")}
            className="header_btn1"
            style={{ marginRight: "50px" }}
          >
            Login
          </button>
          <button
            onClick={() => console.log("Clicked")}
            className="header_btn1 header_box"
            style={{ marginRight: "50px" }}
          >
            Sign up
          </button>
          <button
            onClick={() => console.log("Clicked")}
            className="header_btn1"
            style={{ marginRight: "50px" }}
          >
            {`EN `}
            <img
              style={{
                marginTop: "6px",
                marginLeft: "8px",
                position: "absolute",
              }}
              src={vector1}
              alt="Arrow drop"
            />
          </button>
          {/* <span style={{ marginTop: "1000px" }}>
            <img src={vector1} alt="Arrow drop" />
          </span> */}
        </div>
      </Grid>
    </Grid>
  );
}

function HeaderJadoo(props) {
  return (
    <>
      <img src={logo} className="header_jadoo" alt="Jadoo logo" {...props} />
    </>
  );
}

export default Header_C;
