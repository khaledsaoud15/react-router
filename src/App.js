
import './App.css';
import Header from './Component/Header';
import Main from './Component/Main';
import Footer from './Component/Footer';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
   <Router>
     <Switch>
       <Route path = '/header' Component = {Header} />
       <Route path = '/main' Component = {Main} />
       <Route path = '/footer' Component = {Footer} />
       <Route path = '/' component={}/>
     </Switch>
   </Router>
    
  );
}

export default App;
