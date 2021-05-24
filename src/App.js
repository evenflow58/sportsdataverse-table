const sdv = require("sportsdataverse");

function App() {
  // async function getScores() {
  //   const inputs = {
  //     year: 2021,
  //     month: 2,
  //     day: 15,
  //   };
  //   const scores = await sdv.wbb.getScoreboard(inputs);
  //   console.log(scores);
  // }

  // getScores();

  return (
    <table>
      <tr>
        <th>Some header</th>
      </tr>
      <tr>
        <td>Some data</td>
      </tr>
    </table>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
