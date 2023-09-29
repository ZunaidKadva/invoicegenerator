import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <div>
      <Navbar title='Invoice Generator'/>
      <TextForm/>
    </div>
  );
}

export default App;
