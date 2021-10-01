# useStateCallback

It is a simple custom hook on top of useState to provide a callback after the state is updated, just like in Class Component.

You can pass the function in the second parameter of the set state, in that you will get an updated data as an argument.

for example,

```jsx
import React, {  useEffect } 'react';
import useStateCallback from 'use-state-callback';

function App() {
    const [count, setCount] = useStateCallback(0)

    useEffect(() => {
        setCount(1, state => console.log('updated value', state)) // will show log with value 1
    }, [])

    return <div>
        count : {count}
    </div>
}
```

## Important Note !

- it requires at least 16.8 or higher version of react
