import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Linga',
          id: '473894sd',
        },
        {
          name: 'Frank',
          id: '851123er',
        },
        {
          name: 'Jacky',
          id: '748hgja1',
        },
        {
          name: 'Andrei', 
          id: 'kdksjk757',
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
