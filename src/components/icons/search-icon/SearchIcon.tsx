import React from 'react'
interface SearchIconProps {
  className?: string
}
export function SearchIcon(props: SearchIconProps) {
  return (
    <svg className={props.className} viewBox="0 0 24 24">
      <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
    </svg>
  )
}
