import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { format } from "date-fns";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();

  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(workout.title);
  const [newLoad, setNewLoad] = useState(workout.load);
  const [newReps, setNewReps] = useState(workout.reps);
  const [newCategory, setNewCategory] = useState(workout.category);
  const [newTargetMuscle, setNewTargetMuscle] = useState(workout.targetMuscle);

  // const URL = "http://localhost:8080";
  const URL = process.env.REACT_APP_URL;


  const handleDelete = async () => {
    console.log(workout.id)
    const response = await fetch(`${URL}/workouts/${workout.id}`, {
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
      category: newCategory,
      targetMuscle: newTargetMuscle,
    };

    const response = await fetch(`${URL}/workouts/${workout.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedWorkout),
    });

    if (response.ok) {
      const json = await response.json();
      dispatch({ type: "UPDATE_WORKOUT", payload: json });
      setIsEditing(false);
    }
  };

  const date = new Date(workout.dueDate);
  const formattedDate = format(date, "MMMM d, yyyy");

  return (
    <div className="workout-details">
      {isEditing ? (
        <form onSubmit={handleUpdate} className="edit-form">
          <input
            type="text"
            placeholder="title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="load"
            value={newLoad}
            onChange={(e) => setNewLoad(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="reps"
            value={newReps}
            onChange={(e) => setNewReps(e.target.value)}
            required
          />

          <label>Category:</label>
          <select
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            required
          >
            <option value="PUSH">Push</option>
            <option value="PULL">Pull</option>
            <option value="LEGS">Legs</option>
            <option value="CORE">Core</option>
          </select>

          <label>Target Muscle:</label>
          <select
            value={newTargetMuscle}
            onChange={(e) => setNewTargetMuscle(e.target.value)}
            required
          >
            <option value="CHEST">Chest</option>
            <option value="BACK">Back</option>
            <option value="SHOULDERS">Shoulders</option>
            <option value="ARMS">Arms</option>
            <option value="ABS">Abs</option>
            <option value="LEGS">Legs</option>
          </select>

          <button type="submit" className="edit-btn">
            Update
          </button>
          <button
            type="button"
            className="delete-btn"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </form>
      ) : (
        <>
          <div className="details">
            <h4>{workout.title}</h4>
            <p>
              <strong>Load (kg): </strong>
              {workout.load}kg
            </p>
            <p>
              <strong>Number of reps: </strong>
              {workout.reps}
            </p>
            <p>
              <strong>Category:</strong> {workout.category}
            </p>
            <p>
              <strong>Target Muscle:</strong> {workout.targetMuscle}
            </p>
            <p className="date-label">Posted on {formattedDate}</p>
          </div>
          <div className="buttons">
            <span className="delete-btn" onClick={handleDelete}>
              delete
            </span>
            <span className="edit-btn" onClick={() => setIsEditing(true)}>
              edit
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default WorkoutDetails;


