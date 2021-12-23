import Row from './components/Row';
import Block from './components/Block';
import Chain from './components/Chain';

function App() {

  let chain = new Chain();

  chain.addNewBlock(new Block(1, Date.now(), 'Page 2....'));
  chain.addNewBlock(new Block(2, Date.now(), 'Page 3....'));

  // console.log(chain.allBlocks());

  return (
    <div className="App">
      <div className="container">

        <div className="row mt-5 text-center">
          <div className="col-12">
            <img src="https://assets.edlin.app/logo/logo-symbol-dark.png" height='100'/>
            <h1 className='mt-5'>Blockchain Node</h1>
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
