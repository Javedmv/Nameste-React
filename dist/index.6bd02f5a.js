const heading = React.createElement("h1", {
    id: "outer"
}, "heading1");
const heading1 = React.createElement("h2", {
    id: "inner"
}, "Nameste Everyone");
const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(heading);
const container = React.createElement("div", {
    id: "container"
}, [
    heading,
    heading1
]);
root.render(container);

//# sourceMappingURL=index.6bd02f5a.js.map
