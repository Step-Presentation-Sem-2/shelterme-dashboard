import { useNavigate } from "@remix-run/react"

import type { LinksFunction } from "@remix-run/node"; // or cloudflare/deno
import styles from "~/styles/css/mainPage.css";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: styles },
];

export default function DemoPage() {

    let navigate = useNavigate()
    return <div>

        <h2>Upload an image to check the prediction percentage of deepfake</h2>
        {/*         
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Upload file</label>
        <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/> */}

        <form action="get" className="file_upload">
            <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6 file_upload_icon_img">
                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                    </div>
                    <div className="flex flex-col items-center justify-center pt-5 pb-6 file_upload_text">
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>

                </label>
            </div>
        </form>


        <button type="button" onClick={() => navigate("/demo")}>Click me</button>
    </div>
}