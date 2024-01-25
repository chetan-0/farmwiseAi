import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <select className='main-dropdown'>
          <option value="Student">Student</option>
          <option value="Self-emplyeed">Self_employeed</option>
          <option value="Business">Business</option>
        </select>
        <div className='btn-1'>
          <button>Add Field</button>
        </div>
      </div>
    </div>
  );
}

export default App;
