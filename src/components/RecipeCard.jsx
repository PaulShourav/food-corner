import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import Rating from 'react-rating';

const RecipeCard = ({ recipe }) => {
    const [favourite, setFavourite] = useState(true)
    const { recipe_id, recipe_name, recipe_image, cooking_method, rating } = recipe;
    const handleFavourite = (recipe_id) => {
        toast.success('Added your Favourite Item.')
        setFavourite(false)
        console.log(recipe_id);
    }
    return (
        <>
            <div className="card bg-base-100 shadow-xl ">
                <figure><img src={recipe_image} className='object-cover h-64' alt="Shoes" /></figure>
                <div className="card-body relative">
                    <div className="flex justify-between items-center ">
                        <p className='card-title font-bold '>{recipe_name}</p>
                        <button onClick={() => handleFavourite(recipe_id)} className={`btn btn-sm btn-outline ${favourite ? ' btn-error' : 'btn-disabled'}`} ><FontAwesomeIcon icon="fa-regular fa-bookmark" /></button>
                    </div>
                    <div className='mb-4 text-yellow-500'>
                    <Rating
                        placeholderRating={rating}
                        emptySymbol={<FontAwesomeIcon icon="fa-regular fa-star" />}
                        placeholderSymbol={<FontAwesomeIcon icon="fa-solid fa-star" />}
                        fullSymbol={<FontAwesomeIcon icon="fa-solid fa-star" />}
                    />
                    </div>
                    <div className="card-actions  absolute bottom-3 ">
                        <label htmlFor="my-modal-5" className='btn btn-sm btn-outline btn-secondary'>Details <FontAwesomeIcon icon="fa-solid fa-arrow-right" /></label>
                    </div>
                </div>
            </div>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl relative">
                    <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="hero min-h-screen ">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img src={recipe_image} className="object-cover  h-72 rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-2xl lg:text-5xl font-bold">{recipe_name}</h1>
                                <div className='py-6'>
                                    <p className='text-xl lg:text-2xl font-bold'>Infradiants</p>
                                    <ul className='list-disc list-inside'>
                                        {
                                            recipe?.ingredients?.map((ingredient, index) => <li key={index++}>{ingredient}</li>)
                                        }
                                    </ul>
                                    <p className='text-xl lg:text-2xl font-bold mt-5'>Cooking Method</p>
                                    <p className=''>
                                        <br />
                                        {
                                            cooking_method
                                        }
                                    </p>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default RecipeCard;