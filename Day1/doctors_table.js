import React from 'react';

const DoctorsTable = ({ doctors }) => {
  return (
    <div>
      <h2>Doctors Details</h2>
      <table>
        <thead>
          <tr>
            <th>Doctor ID</th>
            <th>Doctor Name</th>
            <th>Designation</th>
            <th>Experience</th>
            <th>Contact Number</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.doctorId}>
              <td>{doctor.doctorId}</td>
              <td>{doctor.doctorName}</td>
              <td>{doctor.designation}</td>
              <td>{doctor.experience}</td>
              <td>{doctor.contactNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function App() {
  const doctorsData = [
    {
      doctorId: 1,
      doctorName: 'Dr. John Doe',
      designation: 'Cardiologist',
      experience: '10 years',
      contactNumber: '123-456-7890',
    },
    // Add more doctor objects as needed
  ];

  return (
    <div className="App">
      <DoctorsTable doctors={doctorsData} />
    </div>
  );
}

export default App;
