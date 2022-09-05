import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import SidebarOption from './SidebarOption';
import Feed from './Feed'
import Widgets from './Widgets'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <SidebarOption />
      <Feed />
      <Widgets />
    </div>
    
    
  );
}

export default App;
