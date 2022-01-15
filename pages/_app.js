import '@styles/globals.css'
import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Application
