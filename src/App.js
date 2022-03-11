import "./App.css";
import Card from "./Card";
import Data from "./Data";
//import Home from "./Home";
import New from "./New";
import Pic from "./Pic";

function App() {
  const dataComp = Data.map((data) => {
    return (
      <Card key={data.id} title={data.title} desc={data.desc} url={data.url} />
    );
  });

  return (
    <>
      <h2 className="card_title">IT'S MAP TIME</h2>
      {/* <div className="App_">{dataComp}</div> */}

      {/* <New /> */}
      <Pic />
    </>
  );
}

export default App;
