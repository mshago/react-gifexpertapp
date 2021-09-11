import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategory }) => {

    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if( value.trim().length > 2 ){
            setCategory(value)
            setValue('')
        }
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <form 
            onSubmit={handleSubmit}>
            <input 
                type="text"
                value={value}
                onChange={handleChange} 
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired,
}

export default AddCategory;