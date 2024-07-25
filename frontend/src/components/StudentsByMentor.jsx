import React, { useState, useEffect } from 'react';
import { getStudentsByMentor, getMentors } from '../api';

const StudentsByMentor = () => {
  const [mentors, setMentors] = useState([]);
  const [selectedMentor, setSelectedMentor] = useState('');
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchMentors = async () => {
      const { data } = await getMentors();
      setMentors(data);
    };
    fetchMentors();
  }, []);

  useEffect(() => {
    const fetchStudents = async () => {
      if (selectedMentor) {
        const { data } = await getStudentsByMentor(selectedMentor);
        setStudents(data);
      }
    };
    fetchStudents();
  }, [selectedMentor]);

  return (
    <div>
      <h2>Students by Mentor</h2>
      <select
        value={selectedMentor}
        onChange={(e) => setSelectedMentor(e.target.value)}
        required
      >
        <option value="">Select Mentor</option>
        {mentors.map((mentor) => (
          <option key={mentor._id} value={mentor._id}>
            {mentor.name}
          </option>
        ))}
      </select>
      <ul>
        {students.map((student) => (
          <li key={student._id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsByMentor;
