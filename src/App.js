import React from 'react';
import Header from './component/header'
import SideBar from './component/Sidebar'
import Step from './component/route'
function App() {
  const [sidebaropen, toggleSidebar] = React.useState(false);
  const [route, setRoute] = React.useState(1);
  return (
    <div >
      <SideBar open={sidebaropen} handleClose={toggleSidebar}/>
      <Header toggleSidebar={toggleSidebar}/>
      <Step route={route} setRoute={setRoute}/>
    </div>
  );
}

export default App;
