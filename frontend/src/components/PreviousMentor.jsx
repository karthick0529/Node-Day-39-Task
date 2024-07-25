import React, { useState } from 'react';
import { getPreviousMentor } from '../api';

const PreviousMentor = () => {
  const [studentId, setStudentId] = useState('');
  const [previousMentor, setPreviousMentor] = useState(null);
  const [error, setError] = useState('');

  const fetchPreviousMentor = async () => {
    try {
      const response = await getPreviousMentor(studentId);
      setPreviousMentor(response.data);
      setError('');
    } catch (err) {
      setError('Error fetching previous mentor');
      setPreviousMentor(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPreviousMentor();
  };

  return (
    <div className="container">
      <h2>Previous Mentor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          placeholder="Enter Student ID"
          required
        />
        <button type="submit">Get Previous Mentor</button>
      </form>
      {error && <p className="error">{error}</p>}
      {previousMentor && (
        <div className="mentor-info">
          <h3>Previous Mentor Details</h3>
          <p><strong>Name:</strong> {previousMentor.name}</p>
        </div>
      )}
    </div>
  );
};

export default PreviousMentor;
