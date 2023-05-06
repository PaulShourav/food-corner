// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react';
// import Carousel from '../components/Carousel';
import Banner from '../components/Banner';
import ChefCard from '../components/ChefCard';

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
                <p className='text-center font-bold text-4xl'>Our Chef</p>
                <p className='text-center text-xl mt-5'>let's meet our chef</p>
                <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
                    {
                        chefData.map(chef=><ChefCard key={chef.chef_id} chef={chef}> </ChefCard>)
                        
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;