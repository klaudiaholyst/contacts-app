import React, { useState } from 'react';

import DrawerLeft from './components/DrawerLeft/DrawerLeft';
import MenuAppBar from './components/MenuAppBar/MenuAppBar';
import Main from './containers/Main/Main';
import ContactContext from './contexts/ContactContext';

import './App.css';

function App() {
  const [openDrawer, setOpenDrawer] = useState(true);

  return (
    <div className="App">
      <MenuAppBar isDrawerOpen={() => setOpenDrawer(!openDrawer)} />
      <ContactContext>
        <DrawerLeft openDrawer={openDrawer} />
        <Main openDrawer={openDrawer} />
      </ContactContext>
    </div>
  );
}

export default App;
