import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div className={`${width} `}>
      <img className="w-48" src="blog_logo.jpg" alt="logo" />
    </div>
  )
}

export default Logo