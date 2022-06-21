/* eslint-disable react/prop-types */
import './style.css'

const Button = ({ className, type, onClick, title, value }) => {
  return (
        <button
            type={type}
            className={className}
            onClick={onClick}
            value={value}
        >
            title={title}
        </button>
  )
}

export default Button
