import React, { useState } from 'react';
import { addComment } from '../services/api'; 

const CommentSection = ({ topicId }) => {
  const [comment, setComment] = useState('');

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    await addComment(topicId, { text: comment });
    setComment('');
    alert('Comentário adicionado!');
  };

  return (
    <div>
      <h3>Adicionar Comentário</h3>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Escreva seu comentário..."
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default CommentSection;
