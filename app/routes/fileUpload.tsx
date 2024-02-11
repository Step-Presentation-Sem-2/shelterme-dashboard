import { useNavigate } from "@remix-run/react"
export default function DemoPage(){
    
    let navigate = useNavigate()
    return <div>
        <h2>Upload an image to check the prediction percentage of deepfake</h2>
        <button type="button" onClick={() => navigate("/demo")}>Click me</button>
        </div>
}