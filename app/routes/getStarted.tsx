import type { LinksFunction } from "@remix-run/node"; // or cloudflare/deno
import { useNavigate } from "@remix-run/react"
import styles from "~/styles/css/mainPage.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];
export default function Index() {
  let navigate = useNavigate()
  return <div>
    
    <h2>Upload an image to check the prediction percentage of deepfake</h2>

    <button type="button" onClick={() => navigate("/fileUpload")}>Click me</button>
  </div>

}
