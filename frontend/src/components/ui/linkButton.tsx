import { cn } from '@/lib/utils'
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  className?: string,
  path: string,
  children: React.ReactNode,
  color: color,
}
const colorVar = { 
    gray: 'bg-[#F5F7FA] text-[#078080]',
    green: 'bg-[#078080] text-white',
    def: 'bg-[#F45D48] text-white'
  } as const
type color = keyof typeof colorVar;

const LinkButton = ({className, path, children, color}: Props) => {
  return (
    <Link to={path} className={cn("inline-flex items-center justify-center rounded-md bg-neutral-950 py-3 px-4 font-medium text-neutral-50 transition active:scale-95 leading-none", colorVar[color], className)}>{children}</Link>
  )
}

export default LinkButton
