import React from "react"

import { DefaultLayout } from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby";

import '../styles/404.scss';

const NotFoundPage = () => (
  <DefaultLayout>
    <SEO title="Not Found" description={"Design Week Tallahassee"}/>
    <div className="NotFoundPage">
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... oh man. Lets head back <Link to='/'>Home</Link></p>
    </div>
  </DefaultLayout>
);

export default NotFoundPage
