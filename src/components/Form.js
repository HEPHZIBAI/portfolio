import React from 'react';

const Form = () => {
  const config={
    link:'https://form.jotform.com/241690711600044'
  }
  return (
    <div className='text-white py-10 px-5 bg-blue-400'>
      <h1 className='font-bold text-4xl border-b-2 mb-5 w-40'>Feedback</h1>
      <iframe
        title="JotForm"
        src={config.link}
        width="100%"
        height="900px"
      >
      </iframe>
    </div>
  );
};

export default Form;
