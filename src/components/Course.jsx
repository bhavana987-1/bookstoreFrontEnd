import React,{useEffect, useState} from "react";
import Cards from "./Cards";
import axios from "axios";
import list from "../../public/list.json";
import {Link} from "react-router-dom"

function Course() {
  const [book , setBook]=useState([]);
  useEffect(() =>{
    const getBook=async()=>{
      try{
      const res =await axios.get("http://localhost:4001/book");
      console.log(res.data);
      setBook(res.data);
      } catch (error){
        console.log(error);
      }
    };
    getBook();
  },[]);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white dark ">
        <div className="mt-20 items-center justify-center text-center ">
          <h1 className="text-2xl md:text-4xl ">Explore Bestsellers and New Releases!</h1>
          <p className="mt-6">
            Welcome to Book Boulevard, where every book is a new adventure waiting to be discovered.
            Whether you're a lifelong reader or just beginning your literary journey, our carefully curated collection has 
            something for everyone. From timeless classics to contemporary bestsellers, and from gripping thrillers to heartwarming 
            romances, we bring you the best in literature. Dive into the pages of a great book and let your imagination soar. Explore 
            our diverse range of genres and find your next favorite read today. At Book Boulevard, we believe that the right book can 
            change your world.
          </p>
         <Link to="/">
         <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back
         </button>
         </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4" >
          {
            book.map((item)=>(
              <Cards key={item.id} item={item}/>
))}
        </div>
      </div>
    
    </>
  );
}


export default Course;
