import React from 'react'
import { Link } from 'react-router-dom';
import CalenderIcon from '../assets/Calendar.svg'
import LinkButton from './ui/linkButton';
import ArrowIcon from '../assets/arrow.svg'
import type { Problem } from '@/features/database.type';
import LikesIcon from './LikesIcon';
import Comment from './Comment';

type Props = {
    problem: Problem;
}
const ContentList = ({ problem } : Props) => {
    const textSlice = (text:string,length:number) => {
        if(text.length < length) return text;
        return text.slice(0, length)+"...";
    }
  return (
    <div className="p-4 border-2 border-[#211C2A] rounded-md w-[calc((100%-24px)/2)] mb-6 flex flex-col">
            <h2 className="text-[24px] grow">{textSlice(problem.problem, 40)}</h2>
            <p className="text-[16px]">{textSlice(problem.purpose,100)}</p>
            <p className="mt-2 text-gray-500 text-sm bg-[url(../src/assets/Calendar.svg)] bg-no-repeat bg-contain pl-6">{new Date(problem.created_at).toLocaleDateString('ja-JP')}</p>
            <div className='flex mt-2'>
                <LikesIcon count={problem!.likes_count}></LikesIcon>
                <Comment className='ml-2' count={problem!.comments_count}></Comment>
            </div>
            <LinkButton className='inline-block ml-auto group' color='def' path={`/problem/${problem.id}`}>詳細を見る<span><img className='inline-block ml-2 h-[16px] group-hover:translate-x-1 transition-transform duration-200' src={ArrowIcon} alt="" /></span></LinkButton>
    </div>
  )
}

export default ContentList
