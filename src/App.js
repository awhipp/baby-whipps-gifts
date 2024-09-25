import React from 'react';
import './App.css';
import DashboardButton from './components/DashboardButton';
import amazonImage from './images/amazon-registry.png';
import targetImage from './images/target-registry.jpg';
import paypalImage from './images/paypal-registry.jpg';
import babyCover from './images/baby-cover.webp';

function App() {
    return (
        <div className="app-container">
            <header className="app-header" style={{ backgroundImage: `url(${babyCover})` }}>
                <h1>Baby Whipp's Gifts</h1>
                <p>A registry portal for all things baby Whipp.</p>
            </header>
            
            <main className="app-main">
                <div className="button-grid">
                    <DashboardButton title="Amazon" imageUrl={amazonImage} link="https://www.amazon.com/baby-reg/sarah-whipp-alexander-whipp-february-2025-ashburn/3I2HZN10US7JB?br_dsk_hero_yr=&linkCode=ll2&tag=eve-trade-20&linkId=ed33a970b12aabd0e45844c65697c888&language=en_US&ref_=as_li_ss_tl"/>
                    <DashboardButton title="Target" imageUrl={targetImage} link="https://www.target.com/gift-registry/gift/whipp-baby-2025"/>
                    <DashboardButton title="Cash Contribution" imageUrl={paypalImage} link="https://www.paypal.com/paypalme/alexanderwhipp"/>
                </div>
            </main>
            
            <footer className="app-footer">
                <p>Coming January 2025</p>
            </footer>
        </div>
    );
}

export default App;
