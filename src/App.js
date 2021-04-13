import React, { useState } from 'react';

import ClippedDrawer from './components/ClippedDrawer/ClippedDrawer';
import MenuAppBar from './components/MenuAppBar/MenuAppBar';
import Main from './containers/Main/Main';
import ContactContext from './contexts/ContactContext';

import './App.css';


function App() {
  const [open, setOpen] = useState(true);
  
  return (
    <div className="App">
      <MenuAppBar isOpen={() => setOpen(!open)} />
      <ContactContext>
        <ClippedDrawer open={open} />
        <Main open={open} />
      </ContactContext>
    </div>
  );
}

export default App;
