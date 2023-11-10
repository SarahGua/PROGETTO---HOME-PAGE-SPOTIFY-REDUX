import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './components/SideBar';
import Main from './components/Main';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <div className='container fluid'>
      <SideBar />
      <Main />
      <BottomNav />
    </div>   
  );
}

export default App;
