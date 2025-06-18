import { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext()

  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)

  const URL = process.env.REACT_APP_URL;

  const handleSubmit = async (e) => {
  e.preventDefault();

  const workout = { title, load, reps };

  try {
    const response = await fetch(`${URL}/workouts`, {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log("response in post", response);

    // Handle non-OK status (e.g. 502, 400)
    if (!response.ok) {
      let errorMessage = 'An error occurred';
      try {
        const errorJson = await response.json();
        errorMessage = errorJson.error || errorMessage;
      } catch (err) {
        const text = await response.text(); // fallback to text
        errorMessage = text || errorMessage;
      }

      setError(errorMessage);
      return;
    }

    // Parse success JSON
    const json = await response.json();

    // Clear form
    setError(null);
    setTitle('');
    setLoad('');
    setReps('');
    dispatch({ type: 'CREATE_WORKOUT', payload: json });
  } catch (err) {
    console.error("POST request failed:", err);
    setError("Failed to connect to server");
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