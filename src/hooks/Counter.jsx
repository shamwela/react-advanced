import React, { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  return (
    <>
      <input
        onChange={(event) => setName(event.currentTarget.value)}
        type='text'
      />
      <div>
        {name} has clicked {count} times.
      </div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  )
}
