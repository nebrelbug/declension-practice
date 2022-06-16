import React, { useState } from 'react';

let inputClass =
  'mt-1 block w-full rounded-md bg-gray-100 border-transparent w-96 max-w-[90vw]';

let classStates = {
  error:
    'bg-red-50 border border-red-500 focus:ring-red-500 focus:border-red-500',
  correct:
    'bg-green-50 border border-green-500 focus:ring-green-500 focus:border-green-500',
  'in-progress': 'focus:bg-white focus:ring-1',
};

export function Input({ formState, errorMessage, onSubmit, value, setValue }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        className={`${inputClass} ${classStates[formState] || ''}`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoFocus
        readOnly={formState === 'correct'}
      />
      {formState === 'error' && (
        <p className="mt-2 text-sm text-red-600 text-center">{errorMessage}</p>
      )}
    </form>
  );
}
