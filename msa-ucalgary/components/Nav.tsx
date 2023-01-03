import React, { FC, useState } from 'react'

interface NavProps {
  children: React.ReactNode
}

export const Nav:FC<NavProps> = (props) => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <nav className="w-3/5 order-first md:-order-none">
      <ul className='flex justify-between items-center h-full'>{props.children}</ul>
    </nav>
  )
}
