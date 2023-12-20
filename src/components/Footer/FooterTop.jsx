import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';

const categories = ["Popular", "Outdoors", "Mountains", "Beach", "Unique stays", "Categories"];

const FooterTop = () => {
    const [selectedCategory, setSelectedCategory] = useState('Popular');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div>
            <Grid container spacing={2} justifyContent="start" className="mt-4 overflow-x-auto md:overflow-visible">
                {categories.map((category) => (
                    <Grid item key={category}>
                        <Typography
                            variant="body1"
                            className={`inline-block px-3 py-2 rounded-lg ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
                                }`}
                            onClick={() => handleCategoryChange(category)}
                            sx={{ fontSize: '16px', fontWeight: '500', '&:hover': { cursor: "pointer" } }}
                        >
                            {category}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
            {selectedCategory === 'Popular' && (
                <div className="mt-4 p-4 bg-white">
                    <Typography variant="h6">Popular Content Goes Here</Typography>
                </div>
            )}

            {selectedCategory === 'Outdoors' && (
                <div className="mt-4 p-4 bg-white">
                    <Typography variant="h6">Outdoors Content Goes Here</Typography>
                </div>
            )}
            {selectedCategory === 'Mountains' && (
                <div className="mt-4 p-4 bg-white">
                    <Typography variant="h6">Mountains Content Goes Here</Typography>
                </div>
            )}
            {selectedCategory === 'Beach' && (
                <div className="mt-4 p-4 bg-white">
                    <Typography variant="h6">Beach Content Goes Here</Typography>
                </div>
            )}
            {selectedCategory === 'Unique stays' && (
                <div className="mt-4 p-4 bg-white">
                    <Typography variant="h6">Unique stays Content Goes Here</Typography>
                </div>
            )}
            {selectedCategory === 'Categories' && (
                <div className="mt-4 p-4 bg-white">
                    <Typography variant="h6">Categories Content Goes Here</Typography>
                </div>
            )}


        </div>
    );
};

export default FooterTop;
