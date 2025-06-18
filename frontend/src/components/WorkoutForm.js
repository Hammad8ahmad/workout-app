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
  e.preventDefault()

  const workout = { title, load, reps }

  try {
    const response = await fetch(`${URL}/workouts`, {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const text = await response.text()
    let json = null

    try {
      json = JSON.parse(text)
    } catch (err) {
      console.error("Failed to parse response as JSON", err)
    }

    if (!response.ok) {
      setError(json?.error || 'Unexpected error occurred')
      console.log("Error:", json)
    } else {
      setError(null)
      setTitle('')
      setLoad('')
      setReps('')
      dispatch({ type: 'CREATE_WORKOUT', payload: json })
    }
  } catch (err) {
    console.error("Network or fetch error:", err)
    setError("Network error")
  }
}

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