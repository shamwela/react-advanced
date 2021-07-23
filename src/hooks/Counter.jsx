import React, { useState, useEffect } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  useEffect(() => {
    document.title = `${name} has clicked ${count} times.`

    return () => {
      console.log('Clean up')
    }
  })

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
