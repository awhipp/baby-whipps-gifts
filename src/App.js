import React from 'react';
import './App.css';
import DashboardButton from './components/DashboardButton';
import amazonImage from './images/amazon-registry.png';
import targetImage from './images/target-registry.jpg';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Baby Whipp's Gifts</h1>
        <p>A registry portal for all things baby Whipp.</p>
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
