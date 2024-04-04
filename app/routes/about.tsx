import { WithNavigation } from '../components/WithNavigation';
import { Divider } from 'antd';
import React from 'react';
const contentStyle: React.CSSProperties = {
  
  height: '500px',
  width: '1000px',
  color: '#000',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#A9A9A9',
  margin: 'auto',
};

export default function About() {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return <WithNavigation>
    <h1>About Us</h1>
    {/* <h1>About Us</h1>
  <Carousel afterChange={onChange}>
      <div>
        <div style={contentStyle}>
        <h2>Welcome to Authentiscan</h2>
        <p> At Authetiscan, we are committed to revolutionizing the digital landscape by providing cutting-edge solutions to combat the rising threat of fake headshot images. 
        With the rapid advancement of technology, the proliferation of manipulated photos has become an alarming issue, leading to widespread misinformation and deceit.
        </p>

        </div>
      </div>
      <div>
        <div style={contentStyle}>
        <h2>Our Mission</h2>
        <p>
        At Authetiscan, our mission is clear: to empower individuals, businesses, and organizations with the tools they need to verify the authenticity of headshot images.
        We believe in fostering trust and integrity in the digital sphere by ensuring that every headshot shared online reflects reality accurately.
        </p>

        </div>
      </div>
      <div>
        <div style={contentStyle}>
        <h2>How it works</h2>
        <p>
        Using Authetiscan is simple and straightforward. Users can upload headshot images directly to our platform, where our advanced algorithms swiftly analyze and assess the authenticity of each image. Within moments, users receive comprehensive reports detailing the likelihood of manipulation and any detected alterations.
        </p>

        </div>
      </div>
      <div>
        <div style={contentStyle}>
        <h2>Our Commitment to Accuracy:</h2>
        <p>At HeadshotGuardian, we prioritize accuracy above all else. Our team of expert engineers and data scientists continuously refine and improve our algorithms to ensure the highest level of precision in detecting fake headshot images. We understand the importance of reliable verification in today's digital landscape and are dedicated to providing our users with trustworthy results they can depend on.
        </p>

        </div>
      </div>
      <div>
        <div style={contentStyle}>
        <h2>Join Us in the Fight Against Digital Deception:</h2>
        <p>Join us in our mission to combat digital deception and safeguard the integrity of online imagery. Whether you're a professional seeking to verify the authenticity of headshot images for recruitment purposes or an individual concerned about the proliferation of fake profiles on social media, HeadshotGuardian is here to support you every step of the way.</p>


        </div>
      </div>

      
    </Carousel> */}
  

    
    
    
    <h2>Welcome to Authentiscan</h2>
    <p> At Authentiscan, we are committed to revolutionizing the digital landscape by providing cutting-edge solutions to combat the rising threat of fake headshot images. 
    With the rapid advancement of technology, the proliferation of manipulated photos has become an alarming issue, leading to widespread misinformation and deceit.
    </p>
    <Divider />
    <h2>Our Mission</h2>
    <p>
    At Authentiscan, our mission is clear: to empower individuals, businesses, and organizations with the tools they need to verify the authenticity of headshot images.
    We believe in fostering trust and integrity in the digital sphere by ensuring that every headshot shared online reflects reality accurately.
    </p>
    <Divider dashed />
    <h2>How it works</h2>
    <p>
    Using Authentiscan is simple and straightforward. Users can upload headshot images directly to our platform, where our advanced algorithms swiftly analyze and assess the authenticity of each image. Within moments, users receive comprehensive reports detailing the likelihood of manipulation and any detected alterations.
    </p>
    <Divider dashed />
    <h2>Our Commitment to Accuracy:</h2>
    <p>At Authentiscan, we prioritize accuracy above all else. Our team of expert engineers and data scientists continuously refine and improve our algorithms to ensure the highest level of precision in detecting fake headshot images. We understand the importance of reliable verification in today's digital landscape and are dedicated to providing our users with trustworthy results they can depend on.</p>
    <Divider dashed />
    <h2>Join Us in the Fight Against Digital Deception:</h2>
    <p>Join us in our mission to combat digital deception and safeguard the integrity of online imagery. Whether you're a professional seeking to verify the authenticity of headshot images for recruitment purposes or an individual concerned about the proliferation of fake profiles on social media, HeadshotGuardian is here to support you every step of the way.</p>

    </WithNavigation>;
    }
