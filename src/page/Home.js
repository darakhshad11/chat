import React from 'react';

const Home = () => {
    return (
        <>
            <div className="flex flex-col items-center h-screen w-screen bg-blue-400">
                <b className='text-white text-5xl font-bold pt-8'>Strengthen your customer<br />relationships with Chatify!</b>

                <p className='text-black text-2xl items-center'>
                    Add live chat to your site to increase sales & improve customer service.
                </p>

                <button className='bg-blue-700 text-white text-xl py-2 px-4 mt-4'>Sign Up - It's FREE</button>
                <button className='bg-blue-700 text-white text-xl py-2 px-4 mt-2'>Contact Sales</button>
            </div>
        </>
    );
}

export default Home;
