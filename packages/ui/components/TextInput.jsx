import React from 'react'
import PropTypes from 'prop-types'

const TextInput = React.forwardRef(({
  type,
  placeholder,
  name,
  id,
  label,
  className,
  onChange,
  onBlur,
  errorMessage
}, ref) => (
  <div className={className}>
    {label && (
      <label htmlFor={name} className="block text-sm mb-2 font-medium text-gray-700">
        {label}
      </label>
    )}
    <div className="relative rounded-md shadow-sm">
      <input
        ref={ref}
        name={name}
        id={id || name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block sm:text-sm border-gray-300 rounded transition duration-150 w-full"
        onBlur={onBlur}
      />
    </div>
    {errorMessage && (
      <p className="mt-1 text-sm text-red-600" id={`${name}-error`}>
        {errorMessage}
      </p>
    )}
  </div>
))

TextInput.propTypes = {
  type: PropTypes.oneOf(['email', 'text', 'password', 'tel', 'url', 'number', 'date', 'datetime-local']),
  placeholder: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string
}

TextInput.defaultProps = {
  type: 'text',
  placeholder: '',
  name: undefined,
  id: undefined,
  onChange: undefined,
  onBlur: undefined,
  errorMessage: undefined,
  label: undefined,
  className: undefined
}

export default TextInput
