import React, { useState } from 'react'
import { AddCategory } from './AddCategory'
import { GifGrid } from './GifGrid'
import '../styles/style.css';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Dragon Ball']);

  const OnAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([ newCategory, ...categories ]);
  }

  return (
    <div>
      <h1>My Anime Gif Site</h1>
      <AddCategory onNewCategory={ value => OnAddCategory(value) } />
      {
        categories.map( category =>(
          <div key = {category} className='gif-container' >
            <GifGrid category={category} />
          </div>
        ))
      }
    </div>
  )
}
