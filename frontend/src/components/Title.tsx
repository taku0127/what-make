import React from 'react'
type TitleProps = {
    children: React.ReactNode;
  };
const Title = ({children}: TitleProps) => {
  return (
    <div className="border-b border-stroke dark:border-dark-3">
        <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-white">
        {children}
        </h2>
    </div>
  )
}

export default Title
