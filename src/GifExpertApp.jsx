import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);
    const onAddCategory = (value) => {
        if (categories.includes(value)) return;
        setCategories([value, ...categories]);
    };

    return (
    <>
        {/* title */}
        <h1>GifExpertApp</h1>
        <AddCategory
            onNewCategory={ (value) => onAddCategory(value) }
        />

        {/* listado de categorías */}
        {
            categories.map(
                ( category ) => <GifGrid key={category} category={ category } />
            )
        }
    </>
  )
}
