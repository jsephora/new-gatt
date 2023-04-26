import * as React from 'react'
import MainNav from './mainnav'
import { container } from './homelayout.module.scss'
import { StaticImage } from 'gatsby-plugin-image'

const HomeLayout = ({ children }) => {
  return (
    <>
      <MainNav />
      <StaticImage
        alt="my badboy background image"
        src="../images/crosswalk.jpg"
      />
      <div className={container}>
        <main>
          {children}
        </main>
      </div>
    </>
  );
};

export default HomeLayout;
