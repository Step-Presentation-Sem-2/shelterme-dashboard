import type { LinksFunction } from "@remix-run/node"; // or cloudflare/deno
import { useNavigate } from "@remix-run/react"
import { Link } from 'react-router-dom';


import styles from "~/styles/css/mainPage.css";

export const links: LinksFunction = () => [
  { 
    rel: "stylesheet", href: styles 
  },
];
export default function Index() {
  let navigate = useNavigate()
  return <div>
    <nav className="navbar">
    <div className="container">
    <a className="navbar-brand" href="#">
      <img src="app\img\icon.jpg" alt="" width="30" height="24"/>
    </a>
    </div>
      <ul className="nav-list">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>

    <div className="headings">
    <h1>AuthentiScan</h1>
    <h2>Diving Deep:Detecting the Digital Doppelganger</h2>
    </div>
    <div className="buttons">
    <button className="custom-button" type="button" onClick={() => navigate("/getStarted")}>Get Started</button>
    <button className="custom-button" type="button" onClick={() => navigate("/getStarted")}>Read more</button>
    </div>
  </div>

}



