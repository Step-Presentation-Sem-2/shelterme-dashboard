import type { LinksFunction } from '@remix-run/node'; // or cloudflare/deno
import { useNavigate } from '@remix-run/react';
// import styles from "~/styles/css/mainPage.css";

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];
export default function Index() {
  let navigate = useNavigate();
  return (
    <div>
      <nav className='navbar'>
        <div className='container'>
          <a className='navbar-brand' href='#'>
            <img src='' alt='' width='30' height='24' />
          </a>
        </div>
        <ul className='nav-list'>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/about'>About</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li>
        </ul>
      </nav>
      <div className='headings'>
        <h2>Upload an image to check the prediction percentage of deepfake</h2>
      </div>

      <div className='buttons'>
        <button type='button' onClick={() => navigate('/fileUpload')}>
          Click me
        </button>
      </div>
    </div>
  );
}
