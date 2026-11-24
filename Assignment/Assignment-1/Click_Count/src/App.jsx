import React from "react";
import StudentList from "./pages/studentList.jsx";

function App() {
  const students = [
    { name: "Vidhi", age: 19, course: "React", city: "Ahmedabad" },
    { name: "Devanshi", age: 18, course: "Node.js", city: "Surat" },
    { name: "Rani", age: 18, course: "JavaScript", city: "Vadodara" },
  ];

  return (
    <div>
      <h1>Student List</h1>
      <StudentList students={students} />
    </div>
  );
}

export default App;