import * as React from 'react';
import Filter from "../components/Filter/Filter.component";
import YachtsList from "../components/YachtsList/YachtsList.component";
import Subscribe from "../components/Subscribe/Subscribe.component";
import Footer from "../components/Footer/Footer.component";
const Home = () => {
  return (
    <>
      <Filter />
      <YachtsList />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;