import { useEffect, useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

// components
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"

const Workouts = () => {
  const { workouts, dispatch } = useWorkoutsContext()

  const [filter, setFilter] = useState("")  // ✅ correctly named
  const [filteredWorkouts, setFilteredWorkouts] = useState([])

  const URL = "http://localhost:8080"

  // Fetch workouts once
  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch(`${URL}/workouts`)
        const json = await response.json()
        if (response.ok) {
          dispatch({ type: "SET_WORKOUTS", payload: json })
        }
      } catch (err) {
        console.error("Fetch error:", err.message)
      }
    }

    fetchWorkouts()
  }, [dispatch])

  // Apply filtering
  useEffect(() => {
    if (!workouts) return

    let sorted = [...workouts]

    switch (filter) {
      case "By date":
        sorted.sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate))
        break
      case "By category":
        sorted.sort((a, b) => a.category.localeCompare(b.category))
        break
      case "By title":
        sorted.sort((a, b) => a.title.localeCompare(b.title))
        break
      case "By target muscle":
        sorted.sort((a, b) => a.targetMuscle.localeCompare(b.targetMuscle))
        break
      default:
        // No filter
        break
    }

    setFilteredWorkouts(sorted)
  }, [filter, workouts])

  return (
    <>
      <div className="totalworkouts">
        <div className="total-workouts-container">
          <h2 className="total-workouts-heading">
            Total Workouts:{" "}
            <span className="total-workouts-count">{workouts?.length || 0}</span>
          </h2>
        </div>
      </div>

      {/* Filter UI */}
      <div className="total-workouts-container">
        <label htmlFor="filter">Sort Workouts:</label>
        <select id="filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="">All workouts</option>
          <option value="By target muscle">By target muscle</option>
          <option value="By date">By Date</option>
          <option value="By category">By Category</option>
          <option value="By title">By Title</option>
        </select>
      </div>

      {/* Workouts list */}
      <div className="total-workouts-page">
        <div className="total-workouts">
          {filteredWorkouts.length ? (
            filteredWorkouts.map((workout) => (
              <WorkoutDetails workout={workout} key={workout.id} />
            ))
          ) : (
            <div className="no-workouts">No workouts yet.</div>
          )}
        </div>
      </div>
    </>
  )
}

export default Workouts
