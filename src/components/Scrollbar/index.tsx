import { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2'

class App extends Component {
  render() {
    return (
      <Scrollbars style={{ width: 500, height: 300 }}>
        <p>Some great content...</p>
      </Scrollbars>
    )
  }
}
