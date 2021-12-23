import React from 'react';
import dayjs from 'dayjs';

import Block from './components/Block';
import Chain from './components/Chain';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chain: new Chain(),
    };

    this.state.chain.addNewBlock(new Block(1, Date.now(), 'Page 2....'));
    this.state.chain.addNewBlock(new Block(2, Date.now(), 'Page 3....'));
  }

  handleOnChange(e, block) {
    let chain = this.state.chain;
    block.content = e.target.value;
    chain.updateBlock(block);

    this.setState({
      chain: chain,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">

          <div className="row mt-5 text-center">
            <div className="col-12">
              <img src="https://assets.edlin.app/logo/logo-symbol-dark.png" height="100"/>
              <h1 className="mt-5">Blockchain Node</h1>
            </div>

            <div className="col-12 col-md-6 offset-md-3 mt-2">
              <p>Hey there, I'm a Blockchain.</p>

              <p>My purpose is to demonstrate building a <a
                href="https://en.wikipedia.org/wiki/Blockchain">blockchain</a>
                &nbsp;using <a href="https://nodejs.org/en/" target="_blank">NodeJs</a> in 5 minutes.
              </p>

              <p>You can check my source code <a href="https://github.com/rossedlin/blockchain-node"
                                                 target="_blank">here</a>.
              </p>
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
                {this.state.chain.allBlocks() && this.state.chain.allBlocks().map(block => {

                  let {index, content, current_time, hash, prevHash} = block;

                  return <tr>
                    <th scope="row">{index}</th>
                    <td>{dayjs(current_time).format('YYYY-MM-DD HH:mm:ss')}</td>
                    <td>
                    <textarea className="form-control"
                              rows="3"
                              value={content}
                              onChange={(e) => {this.handleOnChange(e, block);}}/>
                    </td>
                    <td>
                      <button type="button"
                              className="btn btn-primary"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title={hash}>
                        {hash.toString().substring(0, 8)}
                      </button>
                    </td>
                    <td>
                      <button type="button"
                              className="btn btn-success"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title={prevHash}>
                        {prevHash.toString().substring(0, 8)}
                      </button>
                    </td>
                  </tr>;
                })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
