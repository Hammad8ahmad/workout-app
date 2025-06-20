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

    <div className="workouts-page">
      <div className="workouts">
        {workouts && workouts.map(workout => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))}
      </div>
    </div>
  

</>
}

export default Workouts




