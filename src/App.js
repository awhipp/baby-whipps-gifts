import React from 'react';
import './App.css';
import DashboardButton from './components/DashboardButton';
import amazonImage from './images/amazon-registry.png';
import targetImage from './images/target-registry.jpg';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Whipp Baby Registries</h1>
      </header>

      <main className="app-main">
        <div className="button-grid">
          <DashboardButton title="Amazon" imageUrl={amazonImage} link="#"/>
          <DashboardButton title="Target" imageUrl={targetImage} link="#"/>
        </div>
      </main>

      <footer className="app-footer">
        <p>Coming Early 2025</p>
      </footer>
    </div>
  );
}

export default App;
