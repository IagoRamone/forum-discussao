import React from 'react';
import { useParams } from 'react-router-dom';
import './TopicPage.css'; 

const TopicPage = () => {
  const { id } = useParams();
  
  return (
    <div className="topic-page">
      <h1>Detalhes do Tópico {id}</h1>
      <p>Aqui estão os detalhes do tópico selecionado.</p>
    </div>
  );
};

export default TopicPage;
