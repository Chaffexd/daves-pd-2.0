import React from 'react'

const StarRating = ({ stars }) => {
    const starIcons = [];

    for(let i = 1; i <= 5; i++) {
        if(i <= stars) {
            starIcons.push(<span key={i} className='text-yellow-400 text-xl'>&#9733;</span>)
        } else {
            starIcons.push(<span key={i} className="text-gray-300 text-xl">&#9733;</span>)
        }
    }

  return (
    <div>{starIcons}</div>
  )
}

export default StarRating