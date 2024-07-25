import React, { useState, useEffect } from 'react';
import { createStudent, getMentors } from '../api';

const CreateStudent = () => {
  const [name, setName] = useState('');
  const [mentors, setMentors] = useState([]);
  const [mentorId, setMentorId] = useState('');

  useEffect(() => {
    const fetchMentors = async () => {
      const { data } = await getMentors();
      setMentors(data);
    };
    fetchMentors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createStudent({ name, mentor: mentorId });
    setName('');
    setMentorId('');
  };

  return (
    <div>
      <h2>Create Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Student Name"
          required
        />
        <select
          value={mentorId}
          onChange={(e) => setMentorId(e.target.value)}
        >
          <option value="">Select Mentor</option>
          {mentors.map((mentor) => (
            <option key={mentor._id} value={mentor._id}>
              {mentor.name}
            </option>
          ))}
        </select>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateStudent;
