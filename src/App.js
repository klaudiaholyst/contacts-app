import React from 'react';

import ClippedDrawer from './components/ClippedDrawer/ClippedDrawer';
import MenuAppBar from './components/MenuAppBar/MenuAppBar';
import Main from './containers/Main/Main';

import './App.css';


function App() {
  const [open, setOpen] = React.useState(true);

  return (
    <div className="App">
      <MenuAppBar isOpen={() => setOpen(!open)} />
      <ClippedDrawer open={open} />
      <Main open={open} />
    </div>
  );
}

export default App;
