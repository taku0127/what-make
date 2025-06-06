import React from 'react'
import HeartIcon from '../assets/heart.svg'

type Props = {
    count?:number
}
const LikesIcon = ({count}:Props) => {
  return (
    <div>
        <img className='w-6 inline-block' src={HeartIcon} alt="" /><span className='ml-1'>{count ? count : 0}</span>
    </div>
  )
}

export default LikesIcon
