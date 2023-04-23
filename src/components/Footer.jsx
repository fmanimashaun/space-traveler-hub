import React from 'react';

const Footer = () => {
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };
  return (
    <footer className="footer pt-4 pb-4">
      <p className="text-muted text-center mb-0">
        {`©${getYear()} `}
        <span>
          <a
            href="https://github.com/fmanimashaun"
            target="_blank"
            rel="noreferrer"
          >
            fmanimashaun
          </a>
          {' & '}
          <a
            href="https://github.com/edgardsoza"
            target="_blank"
            rel="noreferrer"
          >
            edgardsoza
          </a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
