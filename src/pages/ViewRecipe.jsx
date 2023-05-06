import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';

const ViewRecipe = () => {
    const id = useParams();
    const [chefData, setChefData] = useState([])
    const [recipes, setRecipes] = useState([])
    // console.log(chefData);
    // console.log(recipes.recipes);
    useEffect(() => {
        fetch('https://server-food-corner-paulshourav.vercel.app/chefData')
            .then(res => res.json())
            .then(data => {
                const findChef = data.find(data => data.chef_id == id.id);
                setChefData(findChef)
            }
            )

    }, [])
    useEffect(() => {
        fetch('https://server-food-corner-paulshourav.vercel.app/chefRecipeData')
            .then(res => res.json())
            .then(data => {
                const findChef = data.find(data => data.chef_id == id.id);
                setRecipes(findChef)
            }
            )

    }, [])




    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content my-container flex-col gap-16 lg:flex-row">
                    <img src={chefData.chef_image} className="max-w-sm h-80 rounded-lg shadow-2xl" />
                    <div >
                        <h1 className="text-5xl font-bold">{chefData.chef_name}</h1>
                        <p className="py-6 text-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className='text-xl'>
                            <p>Year of Experience: {chefData.experiences}</p>
                            <p>Likes: {chefData.likes} <FontAwesomeIcon icon="fa-solid fa-thumbs-up" /></p>
                            <p>Recipes: {chefData.number_of_recipes}</p>
                        </div>

                        <Link className='btn btn-primary text-base mt-4'>Explore Recipes <FontAwesomeIcon icon="fa-solid fa-utensils" className='ps-1' /></Link>
                    </div>
                </div>
            </div>
            <section className='my-28'>
                <p className='mb-12 font-bold text-4xl text-center'>Recipes</p>
                <div className='my-container grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    { 
                    recipes?.recipes?.map((recipe,index)=><RecipeCard key={index+1} recipe={recipe}></RecipeCard>)
                    }
                </div>
            </section>
        </div>
    );
};

export default ViewRecipe;