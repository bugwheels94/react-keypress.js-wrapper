import { useState, useEffect } from 'react'
import './App.css'

import { KeyboardShortcutsProvider } from './lib/KeyboardShortcuts'

import ListAllShortcuts from './components/ListAllShortcuts'
import RedShortcutComponent from './components/RedShortcutComponent'
import BlueShortcutComponent from './components/BlueShortComponent'
import GreenShortcutComponent from './components/GreenShortComponent'

function App() {
  return (
    <KeyboardShortcutsProvider>
      <div className="window">
        <RedShortcutComponent />
        <GreenShortcutComponent />
        <BlueShortcutComponent />
        <ListAllShortcuts />      
      </div>
    </KeyboardShortcutsProvider>
  );
}

export default App;
