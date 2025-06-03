import React from 'react'
type TitleProps = {
    children: React.ReactNode;
  };
const Title = ({children}: TitleProps) => {
  return (
    <h2 className="text-[32px] font-bold">
    {children}
    </h2>
    )
}

export default Title
