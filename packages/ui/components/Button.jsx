import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

const getSizeClasses = (size) => {
  switch (size) {
    case 'sm':
      return 'text-sm py-1 px-4'
    case 'lg':
      return 'text-lg py-2 px-8'
    default:
      return 'py-1 px-4'
  }
}

export default function Button({
  children,
  type,
  size,
  fullwidth
}) {
  return (
    <button
      type={type}
      className={clsx(
        'bg-primary-500 text-white rounded hover:bg-primary-600 transition duration-150',
        getSizeClasses(size),
        fullwidth && 'w-full'
      )}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf('button', 'submit', 'reset'),
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['sm', 'lg']),
  fullwidth: PropTypes.bool
}

Button.defaultProps = {
  type: 'button',
  size: undefined,
  fullwidth: false
}
