import React, { useState } from 'react';

export function Button({ onClick }) {
  return (
    <button
      type="button"
      className="text-gray font-medium inline-flex items-center rounded top-1 right-1 absolute hover:bg-gray-100"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-11 w-11"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}

export let closeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export function DeclensionToggle({ value, name, onToggle }) {
  return (
    <button
      type="button"
      className={`text-white font-medium rounded-lg text-sm px-4 py-2 mr-2 my-2 ${
        value
          ? 'bg-blue-700 hover:bg-blue-800'
          : 'bg-gray-700 hover:bg-gray-800'
      }`}
      onClick={onToggle}
    >
      {name}
    </button>
  );
}

export function Checkbox({ value, name, onToggle }) {
  return (
    <label className="flex items-center">
      <input className="form-checkbox" type="checkbox" checked={value} />
      <span className="ml-2">{name}</span>
    </label>
  );
}
