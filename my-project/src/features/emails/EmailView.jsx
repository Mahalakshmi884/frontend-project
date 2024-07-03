import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const EmailView = () => {
  const { id } = useParams();
  const email = useSelector((state) => state.emails.emails.find((email) => email.id === id));

  if (!email) {
    return <div>Email not found</div>;
  }

  return (
    <div>
      <h2>{email.subject}</h2>
      <p>{email.body}</p>
    </div>
  );
};

export default EmailView;
