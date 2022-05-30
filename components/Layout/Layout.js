import React from "react";
import styles from "./Layout.module.css";

const Logo = () => (
  <h1 className="text-primary font-medium text-2xl text-white">
    <a href="#">Jason Strazisar</a>
  </h1>
);

const Header = ({}) => (
  <header className="layout">
    <Logo />
    <nav>
      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
);

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Header />
    <main>{children}</main>
  </div>
);

export default Layout;
