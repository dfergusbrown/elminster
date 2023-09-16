import './App.css';
import { Button } from 'reactstrap';

function App() {
  return (
    <div className="background">
      <div className='container'>
        <Button
          onClick={() => alert('You\'ve entered the Dungeon')}
          title="Enter"
          className='button'
        >ENTER</Button>
      </div>
    </div>
  );
}

export default App;
