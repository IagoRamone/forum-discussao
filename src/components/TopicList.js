import React, { useState, useEffect } from 'react';
import { getTopics } from '../services/api'; 

const TopicList = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getTopics();
      setTopics(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Tópicos Recentes</h2>
      <ul>
        {topics.map(topic => (
          <li key={topic.id}>
            <a href={`/topico/${topic.id}`}>{topic.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicList;
