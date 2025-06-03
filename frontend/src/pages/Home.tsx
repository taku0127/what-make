import HomeContent from '@/components/HomeContent'
import problemRepository from '@/features/problem.repository';
import React, { useEffect, useState } from 'react';
import mv from '../assets/mv.png'
import section from '../assets/section.png'
import Title from '@/components/Title';

const Home = () => {
  const [problems , setProblems] = useState([]);
  useEffect(() => {
    problemRepository.getProblems().then(res=>{
      setProblems(res);
    }
    ).catch(err=>console.log(err));
  },[]);
  return (
    <div className="container mx-auto max-w-[1080px]">
        <div className='md:flex px-20 py-10 relative bg-white'>
          <div className='w-[460px] max-w-full'>
            <img src={mv} alt="" className='w-full object-cover' />
          </div>
          <p className='md:text-[64px] md:absolute md:top-1/2 md:-translate-y-1/2 md:right-20 font-bold max-md:text-[24px] max-md:text-center text-shadow-lg text-shadow-white'>暮らしの困りごと、<br />
          プログラミングで<br />
          ちょっと快適に。</p>
        </div>
        <div className='px-[48px] py-[40px]'>
          <Title>“誰かのちょっとした困った”を、<br />
          自分の力で。</Title>
          <div className="flex items-center justify-between  mt-[24px]">
            <div className='text-[18px]'>
              <p>
                困っている人の声を聞いたとき、<br />
                自分が役に立てたらと思ったことはありませんか？
              </p>
              <p className='mt-4'>
                もしくは、自分の小さな悩みを、<br />
                誰かがアプリで解決してくれたらと願ったことは？<br />
                今、その両方ができる場所があります。
              </p>
              <p className='mt-4'>プログラミングで、日常の課題を見つけて、<br />
              解決する力を身につけましょう。<br />
              あなたの一歩が、誰かの「助かった」に変わります。</p>
            </div>
            <div><img src={section} alt="" /></div>
          </div>
        </div>
        <HomeContent problems={problems}/>
    </div>
  )
}

export default Home
