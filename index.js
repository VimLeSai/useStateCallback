import { useState, useEffect, useRef } from 'react'

const useUpdateCallback = initialValue => {
  const [state, setState] = useState(initialValue)
  const cbRef = useRef()

  useEffect(() => {
    cbRef.current && cbRef.current(state)
  }, [state])

  const updateState = (arg1, cb) => {
    setState(arg1)
    cbRef.current = cb
  }

  return [state, updateState]
}

export default useUpdateCallback
