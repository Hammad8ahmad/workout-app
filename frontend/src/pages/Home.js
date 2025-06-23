import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

// components
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext()


     

  
  const URL = process.env.REACT_APP_URL;
    //  const URL =  'http://localhost:8080';
   


  useEffect(() => {
    const fetchWorkouts = async () => {
     
      const response = await fetch(`${URL}/workouts`);
      console.log("this is the response",response)
      const json = await response.json()
      console.log("this is the response json object,",json)

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }
    fetchWorkouts()
  }, [dispatch,URL])

  return (
    <div className="home">
      <WorkoutForm />
      <div className="workouts">
        {workouts && workouts.map(workout => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))}
      </div>
   
    </div>
  )
}

export default Home;