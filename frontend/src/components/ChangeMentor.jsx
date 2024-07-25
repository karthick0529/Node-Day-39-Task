import React, { useState, useEffect } from 'react';
import { changeMentor, getMentors, getStudents } from '../api';

const ChangeMentor = () => {
  const [students, setStudents] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [newMentorId, setNewMentorId] = useState('');

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
    await changeMentor(selectedStudent, { mentorId: newMentorId });
    setSelectedStudent('');
    setNewMentorId('');
  };

  return (
    <div className="container">
      <h2>Change Student Mentor</h2>
      <form onSubmit={handleSubmit}>
        <select
          value={selectedStudent}
          onChange={(e) => setSelectedStudent(e.target.value)}
          required
        >
          <option value="">Select Student</option>
          {students.map((student) => (
            <option key={student._id} value={student._id}>
              {student.name}
            </option>
          ))}
        </select>
        <select
          value={newMentorId}
          onChange={(e) => setNewMentorId(e.target.value)}
          required
        >
          <option value="">Select New Mentor</option>
          {mentors.map((mentor) => (
            <option key={mentor._id} value={mentor._id}>
              {mentor.name}
            </option>
          ))}
        </select>
        <button type="submit">Change Mentor</button>
      </form>
    </div>
  );
};

export default ChangeMentor;
