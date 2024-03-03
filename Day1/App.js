import React from 'react';

const App = () => {
  const student = {
    sid: 12345,
    sname: 'Meraj',
    course: 'Computer Science',
    age: 22,
    total: 85,
  };

  return (
    <>
    <h3>Student Details</h3>     
    <hr/>
    <table  border="2"  width="500">
      <tbody>
        <tr>
          <th>Student ID (sid):</th>
          <td>{student.sid}</td>
        </tr>
        <tr>
          <th>Student Name (sname):</th>
          <td>{student.sname}</td>
        </tr>
        <tr>
          <th>Course:</th>
          <td>{student.course}</td>
        </tr>
        <tr>
          <th>Age:</th>
          <td>{student.age}</td>
        </tr>
        <tr>
          <th>Total Marks:</th>
          <td>{student.total}</td>
        </tr>
        
      </tbody>
    </table>
    </>
  );
};

export default App;
