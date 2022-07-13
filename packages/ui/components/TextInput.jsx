import React from 'react'
import PropTypes from 'prop-types'

const TextInput = React.forwardRef(({
  type,
  placeholder,
  name,
  id,
  onChange
}, ref) => (
  <input
    ref={ref}
    name={name}
    id={id}
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block sm:text-sm border-gray-300 rounded transition duration-150"
  />
))

TextInput.propTypes = {
  type: PropTypes.oneOf('email', 'text', 'password', 'tel', 'url', 'number', 'date', 'datetime-local'),
  placeholder: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func
}

TextInput.defaultProps = {
  type: 'text',
  placeholder: '',
  name: undefined,
  id: undefined,
  onChange: undefined
}

export default TextInput
