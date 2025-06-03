import React from 'react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'
import LinkButton from './ui/linkButton'

const Header = () => {
  return (
    <header className="text-gray-600 body-font bg-white">
      <div className="container mx-auto flex flex-wrap py-4 lg:px-16 flex-col md:flex-row items-center max-lg:">
        <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-2xl
">こまったらアプリ<span className='text-base
'>~アプリ作成の困りごと解決！作りたい人と作ってほしい人をつなぐアプリ~</span></span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link className='mr-4 hover:underline' to="/">マイページ</Link>
          <LinkButton className='mr-4' color='gray' path='/signin'>ログイン</LinkButton>
          <LinkButton color='green' path='/signup'>登録</LinkButton>
        </nav>
        
      </div>
    </header>
    
  )
}

export default Header
