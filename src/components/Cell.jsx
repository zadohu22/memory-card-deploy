import React, { useState, useEffect } from 'react'

const Cell = (props) => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {

    }, [isClicked])

  return (
    <img
		className='border-solid border-2 border-black m-4 w-52 h-52 object-contain'
		src={props.mon}
		onClick={props.click}
        id={props.id}
		alt=''
	/>
  )
}

export default Cell