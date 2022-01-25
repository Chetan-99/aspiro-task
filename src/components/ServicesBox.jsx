import React from "react";
import { Grid } from "@mui/material";
import { textAlign } from "@mui/system";

function ServicesBox({
  imagePath,
  title,
  content,
  imgStyle,
  titleStyle,
  contentStyle,
}) {
  return (
    <Grid container style={{ width: "267px" }}>
      <Grid item lg={12} height="133px">
        <div style={{ textAlign: "center" }}>
          <img src={imagePath} style={imgStyle} alt={title} />
        </div>
      </Grid>
      <Grid item lg={12}>
        <div className="category_title" style={titleStyle}>
          {title}
        </div>
      </Grid>
      <Grid item lg={12} marginLeft="45px">
        <div className="category_content" style={contentStyle}>
          {content}
        </div>
      </Grid>
    </Grid>
  );
}

export default ServicesBox;
