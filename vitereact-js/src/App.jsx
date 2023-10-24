// import { useState } from 'react'
// import logo from './logo.svg'
// import './App.css'
// import MyComponent from './component/MyComponent'

// // jsx viet html trong jx

// function App() {
//   const [count, setCount] = useState(0)
//   const [name, setName] = useState("")
//   const [info, setInfo] = useState("")
//   const handleOnClick = () => {
//     console.log("Hello")
//     setInfo(name)
//   }
//   const nameTempt = { name: "cotam" }
//   return (
//     <div className="App">
//       <header className="App-header" style={{ color: 'red', paddingTop: 'auto' }}>
//         <MyComponent count={10} />
//         <br />
//         <MyComponent count={11} />
//         <br />
//         <MyComponent count={12} />
//         <br />
//         <MyComponent count={13} />
//         <br />
//         <img src={logo} className="App-logo" alt="logo" />
//         <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
//         <button onClick={() => handleOnClick()}>Click me</button>
//         <p>Hello world {name}</p>
//         <p>Hello world {JSON.stringify(nameTempt)}</p>
//         <p>Hello world {info}</p>

//       </header>

//     </div >
//   )
// }

// export default App


// import logo from './logo.svg'
// import './App.css'
// import SuperForm2 from './component/hooks/SuperForm2'
// function App() {
//   return (
//     <div className='App' style={{ color: 'red' }}>
//       <header className='App-header'>
//         <img src={logo} className="App-logo" alt="logo" />
//         <SuperForm2 />
//         <SuperForm2 />
//         <SuperForm2 />
//       </header>

//     </div>
//   )
// }
// export default App

// import logo from './logo.svg'
// import './App.css'
// import TestAudio from './component/hooks/TestAudio'
// function App() {
//   return (
//     <div className='App' style={{ color: 'red' }}>
//       <header className='App-header'>
//         <img src={logo} className="App-logo" alt="logo" />
//         <TestAudio />
//       </header>

//     </div>
//   )
// }
// export default App

// import logo from './logo.svg'
// import './App.css'
// import SupperInput from './component/customize/SupperInput'
// function App() {
//   return (
//     <div className='App' style={{ color: 'red' }}>
//       <header className='App-header'>
//         <img src={logo} className="App-logo" alt="logo" />
//         <SupperInput />
//       </header>

//     </div>
//   )
// }
// export default App

// import logo from './logo.svg'
// import './App.css'
// import SupperInput from './component/customize/SupperInput'
// import ErrorBoundaries from './component/ErrorBoundaries/ErrorBoundaries'
// function App() {

//   return (
//     <ErrorBoundaries >
//       <div className='App' style={{ color: 'red' }}>
//         <header className='App-header'>
//           <img src={logo} className="App-logo" alt="logo" />
//           <SupperInput />

//         </header>

//       </div>
//     </ErrorBoundaries>
//   )
// }
// export default App

// import logo from './logo.svg'
// import './App.css'
// // import SupperInput from './component/customize/SupperInput'

// import ErrorBoundaries from './component/ErrorBoundaries/ErrorBoundaries'
// import { Suspense, lazy } from 'react'
// const SupperInput = lazy(() => import('./component/customize/SupperInput'))
// function App() {

//   return (
//     <ErrorBoundaries >
//       <div className='App' style={{ color: 'red' }}>
//         <Suspense fallback={<div>Loading ...</div>}>
//           <header className='App-header'>
//             <img src={logo} className="App-logo" alt="logo" />
//             <SupperInput />

//           </header>
//         </Suspense>
//       </div>
//     </ErrorBoundaries >
//   )
// }
// export default App

// import logo from './logo.svg'
// import './App.css'
// // import SupperInput from './component/customize/SupperInput'

// import Parent from './component/childrenandparent/Parent'
// function App() {

//   return (
//     <div className='App' style={{ color: 'red' }}>
//       <header className='App-header'>
//         <img src={logo} className="App-logo" alt="logo" />
//         <Parent />
//       </header>

//     </div>
//   )
// }
// export default App

// import logo from './logo.svg'
// import './App.css'
// // import SupperInput from './component/customize/SupperInput'

// import MyTabs from './component/childrenandparent/MyTabs'
// function App() {

//   return (
//     <div className='App' style={{ color: 'red' }}>
//       <header className='App-header'>
//         <img src={logo} className="App-logo" alt="logo" />
//         <MyTabs />
//       </header>

//     </div>
//   )
// }
// export default App

import logo from './logo.svg'
import './App.css'
// import SupperInput from './component/customize/SupperInput'

import TodoLIst from './component/hooks/callback/TodoLIst'
function App() {

  return (
    <div className='App' style={{ color: 'red' }}>
      <header className='App-header'>
        <img src={logo} className="App-logo" alt="logo" />
        <TodoLIst />
      </header>

    </div>
  )
}
export default App