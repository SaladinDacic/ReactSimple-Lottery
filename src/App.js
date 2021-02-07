import LottoColt from "./Lotto-colt";
import LotteryColt from "./Lottery-colt";
import './App.css';


function App() {
  return (
    <div className="App">
      <LotteryColt/>
      <LotteryColt title={"Mini Daily"} numBall={4} maxNum={10}/>
    </div>
  );
}

export default App;
