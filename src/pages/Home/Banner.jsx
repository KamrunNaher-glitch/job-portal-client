import React from 'react';
import {easeInOut, easeOut, motion} from "framer-motion"
import Team1 from "/src/assets/Team/team1.jpg"
import Team2 from "/src/assets/Team/team2.jpg"

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className='flex-1'>
    <motion.img
      src={Team1}
      animate={{y:[50,100,50]}}
      transition={{duration:10,repeat:Infinity}}
      className="max-w-sm w-64 shadow-2xl rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-blue-700 " />
    <motion.img
      src={Team2 }
      animate={{x:[100,150,100]}}
      transition={{duration:10,repeat:Infinity}}
      className="max-w-sm w-64 shadow-2xl rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-blue-700 " />
    </div>
    <div className='flex-1'>
      
      <motion.h1 
        animate={{x:50,color:['blue']}}
        transition={{duration:2,delay: 1,ease:easeOut,
            repeat:Infinity
        }}
       className="text-5xl font-bold">Latest <motion.span animate={{ color: ['#ecff33', '#ffb6c1', '#48d1cc'] }}
       transition={{duration:1.5,repeat:Infinity}}
       > Job</motion.span> For You!</motion.h1>
      <p className="py-6 w-11/12 mx-auto">
       Indeed is one of the world's most popular job search engines, and more than 350 million visitors access the site per month [4]. This free job board features two types of job postings. Hosted jobs are posted directly on Indeed by employers.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;


