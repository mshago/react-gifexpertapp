import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

const GifExpertApp = () => {

    const [category, setCategory] = useState('One Punch')

    return (
        <>
          <h2>GifExpertApp</h2>
          <AddCategory 
            setCategory={setCategory} />
          <br/>
            <GifGrid
                category={category} 
            />
        </>
    )
}

export default GifExpertApp
