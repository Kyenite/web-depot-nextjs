import React from 'react';

interface FormInputProps {
  label: string;
  id: string;
  name: string;
  type: string;
  autoComplete?: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FormInput({
  label,
  id,
  name,
  type,
  autoComplete,
  required,
  placeholder,
  value,
  onChange,
}: FormInputProps) {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
}