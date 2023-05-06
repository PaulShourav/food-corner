// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react';
// import Carousel from '../components/Carousel';
import Banner from '../components/Banner';
import ChefCard from '../components/ChefCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
    const [chefData, setChefData] = useState([])
   
    useEffect(() => {
        fetch('https://server-food-corner-paulshourav.vercel.app/chefData')
            .then(res => res.json())
            .then(data => setChefData(data))

    }, [])
    return (
        <div>
            <Banner></Banner>
            <section className='my-32 my-container'>
                <p className='text-center font-bold text-3xl lg:text-4xl'>Our Chef</p>
                <p className='text-center text-xl mt-5'>let's meet our chef</p>
                <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
                    {
                        chefData.map(chef=><ChefCard key={chef.chef_id} chef={chef}> </ChefCard>)
                        
                    }
                </div>
            </section>
            <section className='my-32 my-container'>
                    <div className='grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                   
                        <div className='text-center p-6 border-2 rounded-md border-blue-600'>
                        <FontAwesomeIcon icon="fa-regular fa-clock" beatFade className='mb-6 text-6xl text-green-700' />
                            <p className='text-2xl font-bold mb-4'>FAST DELIVERY</p>
                            <p>Everything you order at Restoral will be quickly delivered to your door.</p>
                        </div>
                        <div className='text-center p-6 border-2 rounded-md border-blue-600'>
                        <FontAwesomeIcon icon="fa-solid fa-champagne-glasses" beatFade className='mb-6 text-6xl text-green-700' />
                            <p className='text-2xl font-bold mb-4'>FRESH FOOD</p>
                            <p>We use only the best ingredients to cook the tasty fresh food for you</p>
                        </div>
                        <div className='text-center p-6 border-2 rounded-md border-blue-600'>
                        <FontAwesomeIcon icon="fa-regular fa-paper-plane" beatFade className='mb-6 text-6xl text-green-700' />
                            <p className='text-2xl font-bold mb-4'>EXPERIENCED CHEFS</p>
                            <p>Our staff consists of chefs and cooks with years of experience.</p>
                        </div>
                        <div className='text-center p-6 border-2 rounded-md border-blue-600'>
                        <FontAwesomeIcon icon="fa-solid fa-martini-glass-citrus" beatFade className='mb-6 text-6xl text-green-700' />
                            <p className='text-2xl font-bold mb-4'>A VARIETY OF DISHES</p>
                            <p>In our menu you’ll find a wide variety of dishes, desserts, and drinks.</p>
                        </div>
                    </div>
            </section>
            <section className='mb-28 my-container'>
                    <p className='text-center font-bold text-3xl lg:text-4xl'>Our Testimonials</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-28'>
                        <div className='mb-30 lg:mb-0'> 
                            <div className="divider"><img src="https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=600" className='  object-cover rounded-full w-40 h-40 ' alt="" /></div>
                            <div className='text-center mt-20'>
                            <p className='font-bold text-2xl my-4'>The Best Burgers in the Area</p>
                            <p>Anytime i am driving through san diago, I usually stop by Food Corner.They have very delicious Burger and fires.</p>
                            </div>
                            
                            <div className="divider"><FontAwesomeIcon icon="fa-solid fa-mug-hot" className='text-green-700 text-2xl' beat/></div>
                        </div>
                        <div> 
                            <div className="divider"><img src="https://images.pexels.com/photos/5668870/pexels-photo-5668870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='rounded-full w-40 h-40 ' alt="" /></div>
                            <div className='text-center mt-20'>
                            <p className='font-bold text-2xl my-4'>Your French Fires are the best!</p>
                            <p>Food Corner is my favorite resturant. I usually stop by Food Corner.They have very delicious Burger and fires</p>
                            </div>
                            
                            <div className="divider"><FontAwesomeIcon icon="fa-solid fa-mug-hot" className='text-green-700 text-2xl' beat/></div>
                        </div>

                    </div>
            </section>
        </div>
    );
};

export default Home;