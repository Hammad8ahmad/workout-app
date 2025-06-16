import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();

  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(workout.title);
  const [newLoad, setNewLoad] = useState(workout.load);
  const [newReps, setNewReps] = useState(workout.reps);

  const handleDelete = async () => {
    const response = await fetch('http://localhost:8080/workouts/' + workout.Id, {
      method: "DELETE",
    });

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: workout });
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedWorkout = {
      ...workout,
      title: newTitle,
      load: newLoad,
      reps: newReps,
    };

    const response = await fetch('http://localhost:8080/workouts/' + workout.Id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedWorkout),
    });

    if (response.ok) {
      const json = await response.json();
      dispatch({ type: "UPDATE_WORKOUT", payload: json });
      setIsEditing(false);
    }
  };

  // Convert dueDate string to Date object
  const raw = workout.dueDate;
  const iso = raw.split('.')[0];
  const date = new Date(iso);

  return (
    <div className="workout-details">
      {isEditing ? (
        <form onSubmit={handleUpdate} className="edit-form">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            required
          />
          <input
            type="number"
            value={newLoad}
            onChange={(e) => setNewLoad(e.target.value)}
            required
          />
          <input
            type="number"
            value={newReps}
            onChange={(e) => setNewReps(e.target.value)}
            required
          />
          <button type="submit" className="edit-btn">Update</button>
          <button type="button" className="delete-btn" onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <>
          <div className="details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}kg</p>
            <p><strong>Number of reps: </strong>{workout.reps}</p>
            <p>{formatDistanceToNow(date, { addSuffix: true })}</p>
          </div>
          <div className="buttons">
            <span className="delete-btn" onClick={handleDelete}>delete</span>
            <span className="edit-btn" onClick={() => setIsEditing(true)}>edit</span>
          </div>
        </>
      )}
    </div>
  );
};

export default WorkoutDetails;
