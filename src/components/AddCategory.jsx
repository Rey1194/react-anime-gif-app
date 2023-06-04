import React, { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const OnInputChange = ({ target }) =>{
        setInputValue(target.value);
    }

    const OnSubmit = (event) => {
        event.preventDefault();
        const value = inputValue.trim();
        if (value <= 1) return;
        onNewCategory(value);
        setInputValue('');
    }

    return (
        <form onSubmit = { (event) => OnSubmit(event) } >
            <input 
                type = "text"
                placeholder = "Find Categories"
                value = {inputValue}
                onChange = {OnInputChange}
            />
        </form>
    )
}
