import React, { useRef } from 'react'
import '../styles/App.css'

function Switch() {
  const ref = useRef(null)
  function handleChange() {
  }

  return (
    <div className="dark-mode" >
      <input ref={ref} onChange={handleChange} type="checkbox"  className="checkbox" id="checkbox" />
      <label className="switch" htmlFor="checkbox">

      </label>
    </div>
  )
}

export default Switch