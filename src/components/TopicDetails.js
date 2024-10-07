import React, { useState, useEffect } from 'react';
import { getTopicDetails } from '../services/api'; 

const TopicDetails = ({ match }) => {
  const [topic, setTopic] = useState({});
  const topicId = match.params.id;

  useEffect(() => {
    async function fetchData() {
      const response = await getTopicDetails(topicId);
      setTopic(response.data);
    }
    fetchData();
  }, [topicId]);

  return (
    <div>
      <h2>{topic.title}</h2>
      <p>{topic.content}</p>
      <h3>Comentários</h3>
      <ul>
        {topic.comments && topic.comments.map(comment => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TopicDetails;
