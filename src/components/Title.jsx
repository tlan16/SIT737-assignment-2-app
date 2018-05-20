import React from 'react'
import Jumbotron from 'react-bootstrap/lib/Jumbotron'

class Title extends React.Component {
  render() {
    return (
      <div className={'container'}>
        <Jumbotron>
          <h2>SIT 737</h2>
          <p>
             This is a React application powered with webpack.
          </p>
          <p>
            -- Made with <i className="fa fa-heart text-danger"/> By <i>Frank Lan</i>
          </p>
        </Jumbotron>
      </div>
    )
  }
}

export default Title