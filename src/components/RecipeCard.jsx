import React from 'react';

const RecipeCard = ({ recipe }) => {
    console.log(recipe);
    const { recipe_name, recipe_image, cooking_method, rating } = recipe
    return (
        <>
            <div className="card bg-base-100 shadow-xl ">
                <figure><img src={recipe_image} className='object-cover h-64' alt="Shoes" /></figure>
                <div className="card-body relative">
                    <h2 className="card-title mb-10 ">
                        {recipe_name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                        <div className="card-actions  absolute bottom-3 ">
                            <label htmlFor="my-modal-5" className='btn btn-sm btn-outline btn-primary'>Details</label>
                        </div>
                </div>
            </div>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl relative">
                    <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="hero min-h-screen ">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img src={recipe_image} className="max-w-sm h-72 rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl font-bold">{recipe_name}</h1>
                                <div className='py-6'>
                                    <p className='text-2xl font-bold'>Infradiants</p>
                                    <ul className='list-disc list-inside'>
                                        {
                                            recipe?.ingredients?.map(ingredient => <li>{ingredient}</li>)
                                        }
                                    </ul>
                                    <p className='text-2xl font-bold mt-5'>Cooking Method</p>
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