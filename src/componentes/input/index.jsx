import './style.css'

const Input = ({ name, placeholder, className, type, value, onChange }) => {
  return (
            <input
            name = {name}
            placeholder = {placeholder}
            className={className}
            type={type}
            value={value}
            onChange={onChange}
            required
            />
  )
}

export default Input
