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
    <div className="nav">
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
    </div>
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
