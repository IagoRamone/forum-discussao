import React, { useState } from 'react';
import '../styles/NewTopic.css';

const NewTopic = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Novo Tópico:', { title, description });
  };

  return (
    <div className="new-topic-page">
      <h1>Criar Novo Tópico</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Título</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Descrição</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Criar Tópico</button>
      </form>
    </div>
  );
};

export default NewTopic;
