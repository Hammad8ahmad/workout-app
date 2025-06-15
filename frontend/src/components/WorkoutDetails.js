import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  console.log("This is the workout data coming from the backend",workout)

  const handleClick = async () => {
    const response = await fetch('http://localhost:8080/workouts/' + workout.Id, {
      method: "DELETE",
    });
    // const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: workout});
    }
  };
  // Remove microseconds and convert to valid ISO string
  const raw = workout.dueDate;
  const iso = raw.split('.')[0]; // "2025-06-15T15:33:21"
  const date = new Date(iso);

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Number of reps: </strong>
        {workout.reps}
      </p>
      <p>
        {formatDistanceToNow(date, { addSuffix: true })}
      </p>
      <span className="delete-btn" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default WorkoutDetails;
