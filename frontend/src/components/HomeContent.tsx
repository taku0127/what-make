import React from 'react'
import Title from './Title'
import { Link } from 'react-router-dom';
import ContentList from './ContentList';
import LinkButton from './ui/linkButton';
import ArrowIcon from '../assets/arrow.svg'
import ProductList from './ProductList';

const HomeContent = ({problems}) => {
    const { latest , popular, bookmarks, products } = problems;
  return (
    <div className='max-w-7xl mx-auto bg-[#FFFFFE]'>
        <section className="body-font overflow-hidden pt-[64px] pb-[40px] px-[16px]">
        <Title>新着順！困ったこと一覧</Title>
            <div className="mt-8 divide-y-2 divide-gray-100 flex justify-between flex-wrap">
                {latest?.map(problem =>{
                    return(
                        <ContentList problem={problem} key={problem.id}/>
                    )
                })}
            </div>
            <LinkButton className='inline-block ml-auto group' color='def' path=''>すべてを見る<span><img className='inline-block ml-2 h-[16px] group-hover:translate-x-1 transition-transform duration-200' src={ArrowIcon} alt="" /></span></LinkButton>
        </section>
        <section className="body-font overflow-hidden pt-[64px] pb-[40px] px-[16px]">
        <Title>いいね順！困ったこと一覧</Title>
            <div className="mt-8 divide-y-2 divide-gray-100 flex justify-between flex-wrap">
                {popular?.map(problem =>{
                    return(
                        <ContentList problem={problem} key={problem.id}/>
                    )
                })}
            </div>
            <LinkButton className='inline-block ml-auto group' color='def' path=''>すべてを見る<span><img className='inline-block ml-2 h-[16px] group-hover:translate-x-1 transition-transform duration-200' src={ArrowIcon} alt="" /></span></LinkButton>
        </section>
        <section className="body-font overflow-hidden pt-[64px] pb-[40px] px-[16px]">
        <Title>作ったよ！アプリ一覧</Title>
            <div className="mt-8 divide-gray-100">
                {products?.map(product =>{
                    return(
                        <ProductList product={product} key={product.id}/>
                    )
                })}
            </div>
            <LinkButton className='inline-block ml-auto group' color='def' path=''>すべてを見る<span><img className='inline-block ml-2 h-[16px] group-hover:translate-x-1 transition-transform duration-200' src={ArrowIcon} alt="" /></span></LinkButton>
        </section>
    </div>
  )
}

export default HomeContent
