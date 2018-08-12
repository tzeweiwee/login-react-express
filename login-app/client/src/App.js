import React, { Component } from 'react';
import LoginForm from './pages/LoginForm/LoginForm';
import logo from './logo.svg';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1 className={styles.appTitle}>Login Page</h1>
        </header>
        <LoginForm />
      </div>
    );
  }
}

export default App;
