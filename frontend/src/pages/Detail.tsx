import Comment from '@/components/Comment';
import LikesIcon from '@/components/LikesIcon';
import ProductList from '@/components/ProductList';
import Title from '@/components/Title';
import ActionButton from '@/components/ui/ActionButton';
import useCurrentUserStore from '@/features/current-user.state';
import type { Problem } from '@/features/database.type';
import problemRepository from '@/features/problem.repository';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Detail = () => {
  const [ problem, setProblem ] = useState<Problem>();
  const [ productUrl, setProductUrl ] = useState("");
  const [ isPostedProduct, setIsPostedProduct ] = useState(false);
  const [ isOpenEdit, setIsOpenEdit ] = useState<number[]>([]);
  const userStore = useCurrentUserStore();
  const user = userStore.user;
  const products = problem?.products;
  const comments = problem?.comments;
  const { id } = useParams();
  const openHandle = (id:number) => {
    if(isOpenEdit.includes(id)){
      setIsOpenEdit(prev => prev.filter(num => num !== id));
      return
    };
    setIsOpenEdit(prev => [...(prev ?? []),id]);
  }
  const editProduct = async (id:number) => {
    try{
      await problemRepository.editProduct(id,productUrl);
      setProblem(prev => {
        if (!prev) return prev;
        return {
          ...prev,
          products: prev.products?.map(product => product.id == id ? {...product,url:productUrl} : product)
        };
      });
      setIsOpenEdit(prev => prev.filter(num => num !== id));
      setProductUrl("");
    }catch(err){
      if (axios.isAxiosError(err)) {
        const message = err.response?.data?.error || 'エラーが発生しました';
        alert(message);
      } else if (err instanceof Error) {
        alert(err.message);
      } else {
        alert(String(err));
      }
    }
  }
  const deleteProduct = async (id:number) => {
    try{
      await problemRepository.deleteProduct(id);
      setProblem(prev => {
        if (!prev) return prev;
        return {
          ...prev,
          products: prev.products?.filter(product => product.id !== id)
        };
      });
      setIsPostedProduct(false);
    }catch(err){
      if (axios.isAxiosError(err)) {
        const message = err.response?.data?.error || 'エラーが発生しました';
        alert(message);
      } else if (err instanceof Error) {
        alert(err.message);
      } else {
        alert(String(err));
      }
    }
  }
  const postProduct = async () => {
    try{
      // 投稿
      const newProduct = await problemRepository.createProduct(id!,productUrl);
      // 保存
      setProblem(prev => {
        if (!prev) return prev;
        return {
          ...prev,
          products: [newProduct, ...(prev.products ?? [])]
        };
      });
      setIsPostedProduct(true);
      setProductUrl("");
    }catch(err){
      if (axios.isAxiosError(err)) {
        const message = err.response?.data?.error || 'エラーが発生しました';
        alert(message);
      } else if (err instanceof Error) {
        alert(err.message);
      } else {
        alert(String(err));
      }
    }
  }
  useEffect(() => {
    problemRepository.getOne(id!).then(res => {
      setProblem(res);
      res?.products?.some(product => product.user_id == user?.id) && setIsPostedProduct(true)
    }).catch(err=>console.log(err))
  },[])
  useEffect(() => {
    products?.some(product => product.user_id == user?.id) && setIsPostedProduct(true)
  },[user])
  return (
    <>
    <section className="bg-white container mx-auto max-w-[1080px]">
      
      { problem && 
        (<>
            <section className='py-6 px-4'>
              <Title>{problem.problem}</Title>
              <p className="mt-2 font-bold">目的</p>
              <p className="mt-2">{problem.purpose}</p>
              <p className="mt-2">{problem.user!.name}</p>
              <div className='flex mt-2'>
                  <LikesIcon count={problem!.likes_count}></LikesIcon>
                  <Comment className='ml-2' count={problem!.comments_count}></Comment>
              </div>
            </section>
            <section className='py-6 px-4'>
              <Title>作ったよ！一覧</Title>
              {!isPostedProduct && user &&
              (
                <div className='pt-4'>
                  <h3 className='text-[24px] font-bold'>投稿する</h3>
                  <label htmlFor="url">
                    <p className='py-2'>URL:</p>
                    <input type="text" className='border-2 border-[#211C2A] rounded-md p-1' onChange={ (e) => setProductUrl(e.target.value) } name="url" id="url" placeholder='https://example.com' />
                  </label>
                  <ActionButton color='green' className='ml-2' onClick={postProduct}>投稿する</ActionButton>
                </div>
              )
              }
              <div className="mt-8 divide-gray-100">
                {products?.map(product =>{
                    return(
                      <div className="p-4 border-2 border-[#211C2A] rounded-md w-full mb-6 flex flex-col">
                      <p className="text-[16px]">URL: <a className='text-blue-500 underline' href={product.url}>{product.url}</a></p>
                      <p className="">作った人：<span>{product.user!.name}</span></p>
                      <p className="mt-2 text-gray-500 text-sm bg-[url(../src/assets/Calendar.svg)] bg-no-repeat bg-contain pl-6">{new Date(product.created_at).toLocaleDateString('ja-JP')}</p>
                      {user?.id == product.user_id && 
                      (
                      <>
                        <ActionButton color='def' className='mt-2 self-start' onClick={() => deleteProduct(product.id)}>削除する</ActionButton>
                        <ActionButton color='green' className='mt-2 self-start' onClick={() => openHandle(product.id)}>編集する</ActionButton>
                        
                          <div className={`pt-4 accordion ${isOpenEdit.includes(product.id) && 'is-open'}`}>
                            <h3 className='text-[24px] font-bold'>編集する</h3>
                            <label htmlFor="url">
                              <p className='py-2'>URL:</p>
                              <input type="text" className='border-2 border-[#211C2A] rounded-md p-1' onChange={ (e) => setProductUrl(e.target.value) } name="url" id="url" placeholder='https://example.com' />
                            </label>
                            <ActionButton color='green' className='ml-2' onClick={() => editProduct(product.id)}>投稿する</ActionButton>
                          </div>
                      </>
                      )
                      }
                      </div>
                    )
                })}
              </div>
            </section>
            <section className='py-6 px-4'>
              <Title>コメント {problem.comments_count}件</Title>
              {comments?.map(comment =>{
                return(
                  <div className='py-4 border-b-1 border-gray-200'>
                    <p>
                      { comment.comment}
                    </p>
                    <p className="mt-2 font-bold">{ comment.user.name }</p>
                  </div>
                )
              })}
            </section>
            </>)
      }
    </section>
    </>
  )
}

export default Detail
