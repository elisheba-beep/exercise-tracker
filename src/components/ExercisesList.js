import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ExercisesList() {
  const [exercises, setExercises] = useState([]);

  axios.get("http://localhost:5000/exercises/").then((res) => {
    if (res.data.length > 0) {
      setExercises(
        res.data.map((exercise) => {
          return exercise;
        })
      );
    }
  });

  function deleteExercise(id) {
    axios
      .delete("http://localhost:5000/exercises/" + id)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setExercises(exercises.filter((el) => el._id !== id));
  }
  return (
    <div>
      <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise, index) => {
            return (
              <tr key={index}>
                <td>{exercise.username}</td>
                <td>{exercise.description}</td>
                <td>{exercise.duration}</td>
                <td>{exercise.date.substring(0, 10)}</td>
                <td>
                  <Link to={"/edit/" + exercise._id}>Edit</Link> |{" "}
                  <a href="#" onClick={() => deleteExercise(exercise._id)}>
                    Delete
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
