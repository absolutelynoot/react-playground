import React from 'react'
import Header from './components/Header'

function App() {

  const name = "Faisal"

  return (
    <div className="container">
      {/* <h1>Hello {name} From React</h1> */}
      <Header />
    </div>
  );
}


// class based import
// class App extends React.Component {
//   render(){
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;
