import React from "react";
import StudentCard from "./studentCard.jsx";

function StudentList({ students }) {
  return (
    <div>
      {students.map((student, index) => (
        <StudentCard
          key={index}
          name={student.name}
          age={student.age}
          course={student.course}
          city={student.city}
        />
      ))}
    </div>
  );
}

export default StudentList;