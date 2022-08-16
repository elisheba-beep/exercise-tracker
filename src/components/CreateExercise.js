import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CreateExercise() {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState("");
  const [users, setUsers] = useState([]);

  axios.get("http://localhost:5000/users/").then((res) => {
    if (res.data.length > 0) {
      setUsers(
        res.data.map((user) => {
          return user.username;
        })
      );
    }
  }).catch(err=> console.log(err));

  function onChangeUsername(e) {
    setUsername(e.target.value);
  }
  function onChangeDescription(e) {
    setDescription(e.target.value);
  }
  function onChangeDuration(e) {
    setDuration(e.target.value);
  }
  function onChangeDate(date) {
    setDate(date);
  }
  function onSubmit(e) {
    e.preventDefault();
    const exercise = {
      username: username,
      duration: duration,
      description: description,
      date: date,
    };
    window.location = "/";
    console.log(exercise);
    axios
      .post("http://localhost:5000/exercises/add", exercise)
      .then((res) => console.log(res.data)).catch(err=> console.log(err));
  }
  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select
            required
            className="form-control"
            value={username}
            onChange={onChangeUsername}
          >
            {users.map((user, index) => {
              return (
                <option key={index} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            required
            type="text"
            className="form-control"
            value={description}
            onChange={onChangeDescription}
          />
        </div>
        <div className="form-group">
          <label>Duration(in minutes): </label>
          <input
            type="text"
            className="form-control"
            value={duration}
            onChange={onChangeDuration}
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <DatePicker onChange={onChangeDate} selected={date} />
        </div>
        <div>
          <input
            type="submit"
            value="Create Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
