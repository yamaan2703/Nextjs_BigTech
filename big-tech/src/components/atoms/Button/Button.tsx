import React from 'react'

function Button(props:any) {
    const {label, onClick} = props
  return (
    <button
  className="relative px-8 py-3 rounded-full isolation-auto z-10 border-2 border-[#00c4f4] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#00c4f4] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 font-semibold text-white"
>
  {label}
</button>

  )
}

export default Button