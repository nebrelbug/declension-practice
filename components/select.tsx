import React from 'react';
import Select from 'react-select';

export function SelectComponent({ options, value, onChange, name }) {
  return (
    <label className="block my-2">
      <span>{name}</span>
      <Select
        options={options}
        isMulti
        isClearable={false}
        value={value}
        onChange={onChange}
        isSearchable={false}
        className="my-1"
      />
    </label>
  );
}
