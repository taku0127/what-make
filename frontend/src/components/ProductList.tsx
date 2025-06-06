import React from 'react'
import LinkButton from './ui/linkButton'

const ProductList = ({product}) => {
  if(!product) return null;
  const textSlice = (text:string,length:number) => {
    if(text.length < length) return text;
    return text.slice(0, length)+"...";
}
  return (
    <div className="p-4 border-2 border-[#211C2A] rounded-md w-full mb-6 flex flex-col">
            <h2 className="text-[24px] grow">{textSlice(product.problem.problem,100)}</h2>
            <p className="text-[16px]">URL: <a className='text-blue-500 underline' href={product.url}>{product.url}</a></p>
            <p className="mt-2 text-gray-500 text-sm bg-[url(../src/assets/Calendar.svg)] bg-no-repeat bg-contain pl-6">{new Date(product.created_at).toLocaleDateString('ja-JP')}</p>
    </div>
  )
}

export default ProductList
