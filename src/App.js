import React, { useEffect } from 'react';

import './App.css';

import ClippedDrawer from './components/ClippedDrawer/ClippedDrawer';
import MenuAppBar from './components/MenuAppBar/MenuAppBar';
import Button from './components/Button/Button';
import Main from './containers/Main/Main';

function App() {
  const [open, setOpen] = React.useState(true);

  return (
    <div className="App">
       <MenuAppBar isOpen={ () => setOpen(!open)}/>  
       <ClippedDrawer open={open}/>
       <Main open={open}/>
    </div>
  );
}

export default App;
