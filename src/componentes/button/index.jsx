/* eslint-disable react/prop-types */
import './style.css'

const Button = ({ className, type, onClick, children, value }) => {
  return (
        <button
            type={type}
            className={className}
            onClick={onClick}
            value={value}
        >
            {children}
        </button>
  )
}

export default Button
