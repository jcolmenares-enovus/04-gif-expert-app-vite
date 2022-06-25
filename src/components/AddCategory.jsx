import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('')
    const onInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        const newInputValue = inputValue.trim();
        if (newInputValue.length > 2) {
            onNewCategory(newInputValue)
            setInputValue('');
        }
    };
  return (
    <form onSubmit={ onSubmit }>
        <h2>{ inputValue }</h2>
        <input
            type="text"
            value={ inputValue }
            onChange={ onInputChange }
            placeholder="Buscar gifs"
        ></input>
    </form>
  )
}
