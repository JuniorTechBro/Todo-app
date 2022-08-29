import React from 'react';

const styles = {
  fontSize: "25px",
  lineHeight: "1.447rem",
  margin: "0"
}

const headerStyle = {
  backgroundColor: "#678c89",
  color: "#fff",
  padding: "10px 15px"
};

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1 style={styles}>
        Simple Todo App</h1>
    </header>
  );
};

export default Header;