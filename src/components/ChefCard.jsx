import React from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({chef}) => {
   console.log(chef);
        const {chef_id,chef_name,chef_image,experience,number_of_recipes,likes}=chef;
    return (
        <div className="card  bg-base-100 shadow-xl">
             
            <figure className="px-10 pt-10">
                <img src={chef_image} alt="Shoes" className="rounded-xl h-60 w-60" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{chef_name}</h2>
                <p>Experience:{experience}</p>
                <p>Likes:{likes}</p>
                <div className="card-actions">
                    <Link to='/view-recipe' className="btn btn-primary">View Recipes</Link>
                </div>
            </div>
        </div>
        
    );
};

export default ChefCard;