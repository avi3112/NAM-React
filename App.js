/**
 *
 * <div id="parent">
 *      <div id="child">
 *          <h1>i am h1 tag</h1>
 *          <h2>i am h2 tag</h2>
 *      </div>
 *       <div id="child2">
 *          <h1>i am h1 tag</h1>
 *          <h2>i am h2 tag</h2>
 *      </div>
 * </div>
 *
 *
 * ReactElement(object)=> HTML (browser understand)
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);
// this is core react and very complicated
// JSX bcz its very complicated
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
