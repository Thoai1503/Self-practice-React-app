import React from "react";
import { useState } from "react";

const FormPractice2 = () => {
  const reducer = (students, action) => {};

  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({
    name: "",
    age: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(student);
    setStudents([...students, student]);
    setStudent({
      name: "",
      age: "",
      email: "",
    });
    console.log(students);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={student.name}
          onChange={(e) => setStudent({ ...student, name: e.target.value })}
          placeholder="Name"
        />
        <input
          type="text"
          value={student.age}
          onChange={(e) => setStudent({ ...student, age: e.target.value })}
          placeholder="Age"
        />
        <input
          type="text"
          value={student.email}
          onChange={(e) => setStudent({ ...student, email: e.target.value })}
          placeholder="Email"
        />
        <button type="submit">Add Student</button>
      </form>

      <div>
        {students.map((student, index) => (
          <div key={index}>
            <p>{student.name}</p>
            <p>{student.age}</p>
            <p>{student.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormPractice2;
