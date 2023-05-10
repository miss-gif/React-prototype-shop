import React from "react";

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <div className="title">Prototype Shop</div>
        <div className="subtitle">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          fugiat, debitis quaerat eum hic unde autem aperiam dignissimos dolor
          ut!
        </div>
        <div className="btn__area">
          <a href="https://www.protopie.io" target="_BLANK" rel="noreferrer">
            <button>Try ProtoPie Yourself</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
