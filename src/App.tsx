import React from "react";
import Api from "./util/api/api";

function App() {

  const data = new Api('');
  const datass = async ()=>{
    const result = await data.GET({s:'ovni'});
    console.log(result);
    
  }

  return (
    <div>
      hola mundo
      <button onClick={datass}>ver resultado</button>
    </div>
  );
}

export default App;
