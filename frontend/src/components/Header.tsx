import React from 'react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">なにつくる？~アプリ作りたい人×アイディアがある人~</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link className='mr-5 hover:underline' to="/">マイページ</Link>
          <Link className='mr-5 hover:underline' to="/signin">ログイン</Link>
          <Link to='/signup' className='hover:underline'>新規登録</Link>
        </nav>
        
      </div>
    </header>
    
  )
}

export default Header
