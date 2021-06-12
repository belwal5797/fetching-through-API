import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import PageOption from './PageOption';
import ListOfUsers2 from './ListOfUsers2';
import ListOfUsers1 from './ListOfUsers1';

function App() {

  return (
    <>
 <BrowserRouter>
 <PageOption/>
  <Switch>
  <Route path="/page1" exact component={ListOfUsers1}/>
  <Route path="/page2" exact component={ListOfUsers2}/>
  </Switch>
  </BrowserRouter>
   
    </>
  );
    
  }
export default App;
