import React from 'react'

export default function Pagination({goNext, goPrev}) {
  return (
    <>
    {goPrev && <button onClick={goPrev}>Previous Page</button>}
    <button onClick={goNext}>Next Page</button>
    </>
  )
}
