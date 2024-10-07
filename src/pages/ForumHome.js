import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ForumHome.css';

const ForumHome = () => {
  const topics = [
    { id: 1, title: 'Primeiro Tópico', description: 'Discussão sobre React' },
    { id: 2, title: 'Segundo Tópico', description: 'Discussão sobre APIs' },
    { id: 3, title: 'Terceiro Tópico', description: 'Dúvidas sobre CSS' },
  ];

  return (
    <div className="forum-home">
      <h1>Fórum de Discussão</h1>
      <ul className="topics-list">
        {topics.map(topic => (
          <li key={topic.id}>
            <Link to={`/topico/${topic.id}`}>
              <h2>{topic.title}</h2>
              <p>{topic.description}</p>
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/novo-topico" className="new-topic-button">Criar Novo Tópico</Link>
    </div>
  );
};

export default ForumHome;
