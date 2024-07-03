// src/features/emails/EmailList.jsx

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmailsStart } from './emailSlice'; // Corrected import path

const EmailList = () => {
  const dispatch = useDispatch();
  const emails = useSelector(state => state.emails.emails); // Assuming 'emails' is nested under 'emails' in Redux state

  useEffect(() => {
    dispatch(fetchEmailsStart());
  }, [dispatch]);

  return (
    <div>
      <h2>Email List</h2>
      {emails.map(email => (
        <div key={email.id}>
          <h3>{email.subject}</h3>
          <p>{email.body}</p>
        </div>
      ))}
    </div>
  );
};

export default EmailList;
