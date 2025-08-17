
import React from 'react';

const SharedInput = ({
  type = 'text',
  name,
  value,
  onChange,
  label,
  options = [],
  ...rest
}) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      {label && <label style={{ display: 'block', marginBottom: '0.5rem' }}>{label}</label>}

      {/* Text, Email, Password, Number, etc. */}
      {['text', 'email', 'password', 'number'].includes(type) && (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          {...rest}
        />
      )}

      {/* Textarea */}
      {type === 'textarea' && (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          {...rest}
        />
      )}

      {/* Checkbox */}
      {type === 'checkbox' && (
        <input
          type="checkbox"
          name={name}
          checked={value}
          onChange={onChange}
          {...rest}
        />
      )}

      {/* Radio */}
      {type === 'radio' && options.length > 0 && (
        <div>
          {options.map((opt) => (
            <label key={opt.value} style={{ display: 'block' }}>
              <input
                type="radio"
                name={name}
                value={opt.value}
                checked={value === opt.value}
                onChange={onChange}
                {...rest}
              />
              {opt.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default SharedInput;

