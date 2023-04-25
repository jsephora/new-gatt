import * as React from "react";
import HomeLayout from "../components/homelayout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <HomeLayout pageTitle="Home Page">
      <p>Hello Billy! Have you done guju guju pe?.</p>
      <StaticImage
        alt="people walking between city buildings in Japan"
        src="https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2084&q=80"
      />
      <p>
        As the mountain snows begin to recede and the bare trees start producing
        leaves, an exciting sense of tension takes over cities and towns across
        the country. By late March, the Japanese flock outside to reign in the
        season with the incoming cherry blossom.
      </p>
      <StaticImage
        alt="mt Fuji with snow framed between sakura cherry blossoms"
        src="../images/Fuji-san-with-sakura-small.jpg"
      />
      <p>
        The best time to visit Japan is during spring (March to May) and autumn
        (September to November). This is when Japan is at its most vibrant, with
        delicate cherry blossom or bright red leaves adding contrast to the
        scenery. Remember, it can also be very crowded at this time.
      </p>
      <StaticImage
        alt="Cherry blossoms"
        src="https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80"
      />
      <p>
        Spring is Japan's most famous season, and is symbolized by the iconic
        sakura (cherry blossoms), which typically bloom sometime between the
        second half of March, and the first half of April (sakura bloom
        schedules, too, vary significantly depending on location).
      </p>
    </HomeLayout>
  );
};

export const Head = () => <Seo title = "Home Page" />;

export default IndexPage;
