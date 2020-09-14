/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from "prop-types"

import Header from "../Header"
import "./default-layout.css"
import '../../styles/styles.scss';

const DefaultLayout = ({ children }) => {

  return (
    <>
      <Header/>
        <main>{children}</main>
    </>
  )
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default DefaultLayout
