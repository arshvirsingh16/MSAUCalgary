import Link from 'next/link'
import { FC } from 'react'

import { useSelectedLayoutSegment } from 'next/navigation'
interface NavItemProps {
  label: string;
  link: string;
}

export const NavItem:FC<NavItemProps> = ({label, link}) => { 
  const segment = useSelectedLayoutSegment();

  const isActive:boolean = (segment ?? "") === link;

  return (
    <li className={isActive ? "font-semibold border-b-2 border-msa-green" : ""}>
      <Link href={"/"+ link}>{label}</Link>
    </li>
  )
}
