import { useState } from 'react';
import './App.css';

function App() {
  const [Weight, setweight] = useState('')
  const [Intensity, setIntensity] = useState(1.3)
  const [gender, setgender] = useState('male')
  const [result, setresult] = useState('')

  //function calculate
  const calculate = () => {
    let calories = 0
    if (gender === 'male') {
      calories = (879 + 10.2 * Weight) + Intensity
    } else {
      calories = (795 + 7.18 * Weight) + Intensity

    }
    setresult(calories)
  }

  return (
    <div id="container">
      <h3>Calories</h3>
      <div>
        <label>Weight</label>
        <input type='number' value={Weight} onChange={e => setweight(e.target.value)}/>
      </div>
      <div>
        <label>Intensity</label>
        <select value= {Intensity} onChange={e => setIntensity (e.target.value)}>
          <option value="1.3">Light</option>
          <option value="1.5">Usual</option>
          <option value="1.7">Moderate</option>
          <option value="2">Hard</option>
          <option value="2.2">Very hard</option>
        </select>
      </div>
      <div>
        <label>Gender</label>
        <input type="radio" name="gender" value="male" defaultChecked onChange={e => setgender (e.target.value)}/><label>Male</label>
        <input type="radio" name="gender" value="female" onChange={e => setgender (e.target.value)}/><label>Female</label>
      </div>
      <div>
        <label>Result</label>
        <output>{result.tofixed}</output>
      </div>
      <div>
        <button type="button" onClick={calculate}>Calculate</button>
      </div>
    </div>
  );
}

export default App;
