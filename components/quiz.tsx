import React, { useState } from 'react';
import { Input } from './input';

export function Quiz({ arrayOfPairs }) {
  const handleSubmit = (name) => {
    alert(`Submitting Name ${name}`);
  };

  return (
    <>
      <h3 className="text-3xl mb-20">The small man</h3>

      <Input formState="error" errorMessage="Shoot" onSubmit={handleSubmit} />
    </>
  );
}
