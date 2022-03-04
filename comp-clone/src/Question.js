import React, { useState } from 'react';
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
