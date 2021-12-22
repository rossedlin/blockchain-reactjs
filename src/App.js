import Row from './Row';

const Block = require('./Block');
const Chain = require('./Chain');

function App() {

  let chain = new Chain();

  chain.addNewBlock(new Block(1, Date.now(), 'Page 2....'));
  chain.addNewBlock(new Block(2, Date.now(), 'Page 3....'));

  console.log(chain.allBlocks());

  return (
    <div className="App">
      <div className="container">

        <div className="row mt-5">
          <div className="col-12">
            <h1>Blockchain Node</h1>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <table className="table">
              <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Date / Time</th>
                <th scope="col">Contents</th>
                <th scope="col">Hash</th>
                <th scope="col">Previous Hash</th>
              </tr>
              </thead>
              <tbody>
              {chain.allBlocks() && chain.allBlocks().map(block => <Row key={block.index} block={block}/>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
