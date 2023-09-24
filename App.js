import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement =>js  object => HTML ELEMENT(render)

// JSX(transpiled before it reaches the js engine)=> parcel takes help from babel package to transpile)
// JSX>>babel transpile>>  React.createElement =>js  object => HTML ELEMENT(render)

const title = (<h1 id="heading"> Namaste React using jsx</h1>);

 
// React component
// class based componentn - old way
// functional component >> a component which return jsx

// component composition
const num=10000
const HeadingComponent = () => (
  <div>
    <h2>{num+2}</h2>
    {title}
    <h1> namaste react function component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
