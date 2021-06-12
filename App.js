import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Concept from './Concept';
import Temp from "./Temp";
import Covid from './Covid';
import CovidAll from './CovidAll';
import ClassComp from './ClassComp';
import UseClassComp from './UseClassComp';
import Props from './Props';
import CovidLayout from './CovidLayout';
import TodoList from './TodoList';
import ListOfUsers from './ListOfUsers1';
import PageOption from './PageOption';
import ListOfUsers2 from './ListOfUsers2';
import ListOfUsers1 from './ListOfUsers1';

function App() {

  /*const belwal=()=>{
    alert('btkit');
  }*/

  /*const apply=()=>{
    alert('YOU ARE IN THE FIELD');
  }*/

  /*const team=[
    {
      id:1,
      name:'manoj',
      add:'noida'
    },
    {
      id:2,
      name:'priya',
      add:'delhi'
    },
    {
      id:3,
      name:'kailash',
      add:'uk'
    },
    {
      id:4,
      name:'sunil',
      add:'mh'
    }
  ]*/


  return (
    <>
   {/*<Temp/>*/}
   {/*<Concept name="hello" clg={belwal} test={apply}/>*/}
   
 {/*<BrowserRouter>
  <CovidLayout/>
  <Switch>
  <Route path="/india" exact component={Covid}/>
  <Route path="/state" exact component={CovidAll}/>
  </Switch>
  </BrowserRouter>

  */}

  
  
  {/*<ClassComp info='karan' />*/}
  {/*<ClassComp/>*/}
  {/*<UseClassComp data={team} favTeam='MI'/>*/}

  {/*<Props name='KARAN' team='MI'>
  <p>THIS IS A MI FANS...</p>
  </Props>
  <Props name='SUNIL' team='CSK'>
  <button>click me:</button>
  </Props>
  <Props name='MOHAN' team='DC'>
  <h3>HELLO USER !!!</h3>
  </Props>*/}
  
  {/*<TodoList/>*/}

 {/*<ListOfUsers/> */} 

 
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
