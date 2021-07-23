import React, { useState } from 'react'
import useDocumentTitle from './useDocumentTitle'

export default function Counter() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  useDocumentTitle(`${name} has clicked ${count} times.`)

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
