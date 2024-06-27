import React from 'react'

function cards({item}) {
  return (
    <>
    <div className="mt-4 my-3 p-3">
    <div style={{ padding: '0 5px',  marginTop:"5%"}}>
    <div className="card w-86 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border ">
  <figure>
    <img src={item.image} alt="Shoes" />
    </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>Explore this classic literary masterpiece.</p>
    <div className="card-actions flex justify-start items-center space-x-2">
      <div className="badge badge-outline">{item.author}</div> 
     <div className="cursor-pointer px-3px py-3px rounded-full border-[2px] hover:bg-pink-500">  Buy
     </div>
    </div>
  </div>
</div>
    </div>
    </div>
    
    </>

  )
}

export default cards