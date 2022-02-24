import './App.css';
import { Route, Routes, Switch} from 'react-router-dom';
import Home from './components/pages/Home';
import PhoneDetail from './components/pages/PhoneDetail';
import PhoneList from './components/pages/PhoneList';
import PhonePage from './components/pages/PhonePage';
import PhoneCard from './components/pages/PhoneCard';
import { HOMEPAGE } from './utils/paths';

function App () {
  return (
    <div>
      <Routes>
        <Route exact path="/" render = {() => <Home/>} />
        <Route exact path="/phones" render={() => <PhonePage />}/>
      </Routes>
  
    </div>
  )
}

 export default App;


