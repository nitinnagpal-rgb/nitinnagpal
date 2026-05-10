import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Analytics } from "@vercel/analytics/react";
import ReactGA from "react-ga4";

ReactGA.initialize("G-MYNRS2CR1M");
ReactGA.initialize("G-E293HEB6CX");
ReactGA.send("pageview");

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>,
)