import React from 'react';

const Navbar = ({ setActiveSection, activeSection }) => {
  const handleClick = (section) => {
    setActiveSection(section);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">Portfolio</h1>
      <ul className="nav-links">
        {['home', 'about', 'skills', 'projects', 'certifications', 'contact'].map((section) => (
          <li key={section}>
            <button
              className={activeSection === section ? 'active' : ''}
              onClick={() => handleClick(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
