import './App.css';
import PieChart from './components/PieChart/PieChart.js'

const data = {
  datasets: [{
      data: [10, 20, 30]
  }],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
      'Red',
      'Yellow',
      'Blue'
  ]
};

function App() {

  return (
    <div className="App">

      <h3>TrackPacker</h3>

      <PieChart chartData={data}/>

    </div>
  );
}

export default App;
