import React, { useState, useEffect } from 'react';
import { assignStudents, getMentors, getStudents } from '../api';

const AssignStudent = () => {
  const [students, setStudents] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [mentorId, setMentorId] = useState('');
  const [selectedStudents, setSelectedStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const mentorsData = await getMentors();
      const studentsData = await getStudents();
      setMentors(mentorsData.data);
      setStudents(studentsData.data);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await assignStudents({ mentorId, studentIds: selectedStudents });
    setMentorId('');
    setSelectedStudents([]);
  };

  const handleStudentSelect = (studentId) => {
    setSelectedStudents((prevSelected) =>
      prevSelected.includes(studentId)
        ? prevSelected.filter((id) => id !== studentId)
        : [...prevSelected, studentId]
    );
  };

  return (
    <div className="container">
      <h2>Assign Students to Mentor</h2>
      <form onSubmit={handleSubmit}>
        <select
          value={mentorId}
          onChange={(e) => setMentorId(e.target.value)}
          required
        >
          <option value="">Select Mentor</option>
          {mentors.map((mentor) => (
            <option key={mentor._id} value={mentor._id}>
              {mentor.name}
            </option>
          ))}
        </select>
        <div>
          {students.map((student) => (
            <div key={student._id} className="checkbox-container">
              <input
                type="checkbox"
                checked={selectedStudents.includes(student._id)}
                onChange={() => handleStudentSelect(student._id)}
              />
              {student.name}
            </div>
          ))}
        </div>
        <button type="submit">Assign</button>
      </form>
    </div>
  );
};

export default AssignStudent;
