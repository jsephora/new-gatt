import * as React from 'react'
import HomeLayout from '../components/homelayout'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <HomeLayout pageTitle="Home">

      
    </HomeLayout>
  );
};

export const Head = () => <Seo title = "Home" />;

export default IndexPage;
