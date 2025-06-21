import { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext()

  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)

   const URL = process.env.REACT_APP_URL;
  // const URL =  'http://localhost:8080';




  
const handleSubmit = async (e) => {
  e.preventDefault();

  const workout = { title, load, reps };

  try {
    const response = await fetch(`${URL}/workouts`, {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }// only if needed for cookies
    });

    const text = await response.text(); // Read response as text

    let json;
    try {
      json = JSON.parse(text); // Try to parse JSON
    } catch (err) {
      console.error('Backend did not return JSON:', text);
      console.log("this is the error cming ",err)
      throw new Error('Invalid JSON response: ' + text);
    }

    if (!response.ok) {
      setError(json.message || 'Something went wrong');
      setTimeout(() => {
        setError(null)
      }, 2000);
      return;
    }

    // Success
    setError(null);
    setTitle('');
    setLoad('');
    setReps('');
    dispatch({ type: 'CREATE_WORKOUT', payload: json });

  } catch (err) {
    console.error(' Submit error:', err.message);
     
    setError(err.message);
    setTimeout(() => setError(null), 2000);
    return
  
  }
};


  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Workout</h3>

      <label>Excersize Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
      />

      <label>Load (in kg):</label>
      <input 
        type="number" 
        onChange={(e) => setLoad(e.target.value)} 
        value={load}
      />

      <label>Number of Reps:</label>
      <input 
        type="number"  
        onChange={(e) => setReps(e.target.value)} 
        value={reps} 
      />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm