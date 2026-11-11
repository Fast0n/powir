import React from 'react';
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Broadcast from "./components/Broadcast";
import { SettingsProvider } from "./settings/SettingsContext";

// I default di Chart.js (font, colori) vengono impostati da applyTheme() in base al tema scelto


function App() {
    return (
        <SettingsProvider>
            <div className="pw-app">
                <Broadcast />
                <Navbar />
                <Body />
                <Footer />
            </div>
        </SettingsProvider>
    );
}

export default App;
