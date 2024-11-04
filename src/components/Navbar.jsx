import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import searchIcon from "../../src/assets/search.svg";

export default function NavBar() {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.set(navRef.current, { y: "-100%" });
    gsap.to(navRef.current, {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: "power3.out",
    });
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <img
        alt="logo"
        src="https://s3-alpha-sig.figma.com/img/73ff/6a43/b1f04febff75fbf043c08efc842d6bba?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pcjkJcgfinsDnEf~XbgWHz9bz04hzqSoatgmeSt66eFYt0vMoid~Ykoo2nBxbeutQbw0bERdryheYSmvQ9W2EJgXFnYBN3v7-4XxAEDSDCOgJPLsYnpSfVXlMcLMc~H8f7ye2TIoAlZEyW893sFz~uxnu4nrfwY6XeAemacIe4kC-j5NK~9gHgoDX2DLEJb5QKBXQpg89e4svxV1xDgv8Zm9k3lumbjQRWUlKmnww8lIHjlwRDKdxouFDJy1sbtGOxfTmfnwFkWsK5CJkzeNafXBU0Zcz2Aakz8sK59k84WjmZ~W~CBQ6jM-tj0CpfNY3fwyWcTN1nhuYbEm1F9rwQ__"
        className="navbar-logo"
      />
      <ul className="navbar-list">
        <li className="navbar-list-children">Our Solutions</li>
        <li className="navbar-list-children">Our Result</li>
        <li className="navbar-list-children">Media Covers</li>
        <li className="navbar-list-children">Insights</li>
        <li className="navbar-list-children">Consultants</li>
        <li className="navbar-list-children">Contact Us</li>
      </ul>
      <div className="btn-input-wrapper">
        <div className="navbar-input-box">
          <div className="navbar-search-icon">
            <img src={searchIcon} alt="search" />
          </div>
          <input className="navbar-input" placeholder="Search" />
        </div>
        <div className="navbar-input-button">
          <button className="navbar-button">
            Schedule
            <br /> Call
          </button>
        </div>
      </div>
      <input type="checkbox" id="menu-toggle" className="navbar-checkbox" />
      <label htmlFor="menu-toggle" className="navbar-hamburger">
        <span className="navbar-hamburger-bar"></span>
        <span className="navbar-hamburger-bar"></span>
        <span className="navbar-hamburger-bar"></span>
      </label>
      <ul className="navbar-list-small">
        <li className="navbar-list-children">Our Solutions</li>
        <li className="navbar-list-children">Our Result</li>
        <li className="navbar-list-children">Media Covers</li>
        <li className="navbar-list-children">Insights</li>
        <li className="navbar-list-children">Consultants</li>
        <li className="navbar-list-children">Contact Us</li>
      </ul>
    </nav>
  );
}
