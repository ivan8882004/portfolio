import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Ivan Cheung</h2>
        <p><a href="mailto:ivan888@connect.hku.hk">ivan888@connect.hku.hk</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Ivan. I am studying Computer Science, Finance, and Statistics in HKU.
        My interests lie in machine learning and trading,
        , and I am determined to forge a career in quantitative finance.
        Presently, I am actively searching for internship opportunities,
        to gain valuable industry experience and further develop my skills.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Ivan Cheung;<Link to="/">hi.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
