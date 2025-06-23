import { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext()

  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [category, setCategory] = useState('PUSH')
  const [targetMuscle, setTargetMuscle] = useState('CHEST')

  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  

    // const URL = "http://localhost:8080";
      const URL = process.env.REACT_APP_URL;

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const workout = { title, load, reps, category, targetMuscle }

    try {
      const response = await fetch(`${URL}/workouts`, {
        method: 'POST',
        body: JSON.stringify(workout),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const text = await response.text()
      console.log("this is the text",text)
      let json

      try {
        json = JSON.parse(text)
      } catch (err) {
        console.error('Backend did not return JSON:', text)
        throw new Error('Invalid JSON response: ' + text)
      }

      if (!response.ok) {
        setError(json.message || 'Something went wrong')
        setTimeout(() => setError(null), 2000)
        return
      }
      console.log(workout)

      // Success
      setTitle('')
      setLoad('')
      setReps('')
      setCategory('PUSH')
      setTargetMuscle('CHEST')

      dispatch({ type: 'CREATE_WORKOUT', payload: json })
      setError(null)
    } catch (err) {
      console.error('Submit error:', err.message)
      setError(err.message)
      setTimeout(() => setError(null), 2000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label>Exercise Title:</label>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        required
      />

      <label>Load (in kg) & Reps:</label>
      <div className="inline-inputs">
       <input
         type="number"
         placeholder="Load"
         onChange={(e) => setLoad(e.target.value)}
         value={load}
         required
       />

       <input
         type="number"
         placeholder="Reps"
         onChange={(e) => setReps(e.target.value)}
         value={reps}
         required
       />
      </div>


    
   <label>Category & Target Muscle:</label>
    <div className="inline-inputs">
     <select value={category} onChange={(e) => setCategory(e.target.value)} required>
       <option value="PUSH">Push</option>
       <option value="PULL">Pull</option>
       <option value="LEGS">Legs</option>
       <option value="CORE">Core</option>
     </select>

     <select value={targetMuscle} onChange={(e) => setTargetMuscle(e.target.value)} required>
       <option value="CHEST">Chest</option>
       <option value="BACK">Back</option>
       <option value="SHOULDERS">Shoulders</option>
       <option value="ARMS">Arms</option>
       <option value="ABS">Abs</option>
       <option value="LEGS">Legs</option>
     </select>
    </div>



      <button className={loading ? 'loading' : ''} disabled={loading}>
        {loading ? 'Adding...' : 'Add Workout'}
      </button>

      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm
