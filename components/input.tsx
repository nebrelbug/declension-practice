import React, { useState } from 'react';

let inputClass =
  'mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:bg-white focus:ring-1';

let classStates = {
  error:
    'bg-red-50 border border-red-500 focus:ring-red-500 focus:border-red-500',
  correct:
    'bg-green-50 border border-green-500 focus:ring-green-500 focus:border-green-500',
};

export function Input({ formState, errorMessage, onSubmit }) {
  const [name, setName] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className={`${inputClass} ${classStates[formState] || ''}`}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {formState === 'error' && (
        <p className="mt-2 text-sm text-red-600 text-center">{errorMessage}</p>
      )}
    </form>
  );
}
