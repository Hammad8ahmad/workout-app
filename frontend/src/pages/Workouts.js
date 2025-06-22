import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

// components
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"


const Workouts = () => {
 const { workouts, dispatch } = useWorkoutsContext()
   const URL =  'http://localhost:8080';
     console.log("this is the url",URL)

  useEffect(() => {
    const fetchWorkouts = async () => {
     
      const response = await fetch(`${URL}/workouts`);
      console.log("this is the response",response)
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }
    fetchWorkouts()
  }, [dispatch,URL])

   

return <>
    
    <div className="totalworkouts">
    <div className="total-workouts-container">
      <h2 className="total-workouts-heading">
      Total Workouts:
       <span className="total-workouts-count">{workouts.length}</span>
      </h2>
     </div>
    </div>

    <div className="total-workouts-page">
      <div className="total-workouts">
        {workouts.length? workouts.map(workout => (
          <WorkoutDetails workout={workout} key={workout._id} />
        )) : <div className="no-workouts"> No workouts yet.</div>}
      </div>
    </div>
    

</>
}

export default Workouts




