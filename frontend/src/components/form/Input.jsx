import './input-style.css';

export const Input = ({type, name, placeholder}) => {
    return (
        <input
            type={type} 
            name={name}
            id={name}
            placeholder={placeholder} 
        />
    );
}