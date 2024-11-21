import React from 'react'

const Fragments = () => {
  let age = 25
  return (
    <>
  {
    age >= 18 && <h1>Eligible</h1>
  }
  {
    age >= 18 || <h1>Eligible</h1>
  }
  {
    !age >= 18 && <h1>Not Eligible</h1>
  }
    </>
  )
}

export default Fragments