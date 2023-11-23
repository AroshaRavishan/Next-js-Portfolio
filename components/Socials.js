import React from 'react';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-sm'>
      <a href="https://www.linkedin.com/in/arosha-ravishan-89b459247/" target="_blank" rel="noopener noreferrer">
        <img src="/linkedin.svg" alt="LinkedIn" />
      </a>
      <a href="https://github.com/AroshaRavishan" target="_blank" rel="noopener noreferrer">
        <img src="/github.svg" alt="GitHub" />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100089328633392&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
        <img src="/facebook.svg" alt="Facebook" />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <img src="/twitterx.svg" alt="Twitter" />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <img src="/insta.svg" alt="Instagram" />
      </a>
    </div>
  );
};

export default Socials;
