import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ExercisesList from "./components/ExercisesList";
import EditExercise from "./components/EditExercise";
import CreateUser from "./components/CreateUser";
import CreateExercise from "./components/CreateExercise";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Routes>
          <Route path="/" exact element={<ExercisesList />} />
          <Route path="/edit/:id" exact element={<EditExercise />} />
          <Route path="/create" exact element={<CreateExercise/>} />
          <Route path="/user" exact element={<CreateUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
