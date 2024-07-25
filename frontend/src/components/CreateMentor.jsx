import React, { useState } from 'react';
import { createMentor } from '../api';

const CreateMentor = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createMentor({ name });
    setName('');
  };

  return (
    <div className="container">
      <h2>Create Mentor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Mentor Name"
          required
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateMentor;
