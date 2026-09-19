

function App() {
  let  counter = 5

  const AddValue = ()=>{
    console.log("clicked", counter);
    counter = counter+1
    
  }

  return (
    <>
    <h1>chai aur react</h1>
    <h2>consequuntur: {counter}</h2>

    <button 
    onClick={AddValue}
    >Add Value</button>
    <br />
    <button>decent Value</button>
    </>
  )
}

export default App
