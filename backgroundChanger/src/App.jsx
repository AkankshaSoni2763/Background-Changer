import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center right-12 left-11  insert-x-0 px-5 py-10 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl ">
          <button onClick={ () => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={ () => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "green" }}>Green</button>
          <button  onClick={ () => setColor("yellow")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "yellow" }}>Yellow</button>
          <button  onClick={ () => setColor("grey")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "grey" }}>Grey</button>
          <button  onClick={ () => setColor("pink")}className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{ backgroundColor: "pink" }}>Pink</button>
          <button  onClick={ () => setColor("white")}className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{ backgroundColor: "white" }}>White</button>
          <button  onClick={ () => setColor("black")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "black" }}>Black</button>
          <button  onClick={ () => setColor("purple")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "purple" }}>Purple</button>
          <button  onClick={ () => setColor("lavender")}className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{ backgroundColor: "lavender" }}>Lavender</button>


        </div>

      </div>
    </div>
  )
}

export default App
