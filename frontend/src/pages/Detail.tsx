import problemRepository from '@/features/problem.repository';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Detail = () => {
  const [ problem, setProblem ] = useState<any>();
  const { id } = useParams();
  useEffect(() => {
    problemRepository.getOne(id!).then(res => {
      setProblem(res);
    }).catch(err=>console.log(err))
  },[])
  return (
    <>
        <div>{ problem?.problem}</div>
        <div>{ problem?.user.name}</div>
    </>
  )
}

export default Detail
