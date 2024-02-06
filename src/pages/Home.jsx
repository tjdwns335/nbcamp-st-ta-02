import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeWrap>
      <Header />
      <Main />
      <Footer />
    </HomeWrap>
  );
};

export default Home;

const HomeWrap = styled.div`
  
`
