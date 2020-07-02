import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";

function App(){return(<>
<h1 className="heading_style">Best movies of Hrithik</h1>


{Sdata.map((val,ind,arr)=>{
  return(
    <Card
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    />
  );
})}
</>    );
}

export default App;