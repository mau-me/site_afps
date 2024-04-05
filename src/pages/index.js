import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./home.js";
import Layout from "../layouts";

const IndexPage = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Layout>
        <Home />
      </Layout>
    </React.Fragment>
  );
};

export default IndexPage;
