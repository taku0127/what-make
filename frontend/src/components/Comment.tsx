import React from 'react'
import CommentIcon from '../assets/comment.svg';
type Props = {
    count?:number,
    className: string
}
const Comment = ({ count,className } : Props) => {
  return (
    <div className={className}><img className='w-6 inline-block' src={CommentIcon} alt="" /><span className='ml-1'>{count ? count : 0}</span></div>
  )
}

export default Comment
