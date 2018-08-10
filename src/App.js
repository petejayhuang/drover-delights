import React, { Component } from 'react'
import person from './person.png'
import './App.css'

//
class App extends Component {
  state = {
    monthlyPrice: 0,
    duration: 0
  }
  handleChange = (e, stateProperty) => {
    this.setState({ [stateProperty]: e.target.value })
  }

  renderPerks = () => {
    const commission = this.state.monthlyPrice * this.state.duration * 0.15
    let result = ''
    if (commission < 500) {
      result = 'plus perks'
    }

    if (commission > 500) {
      result = 'premium perks'
    }
    return result
  }

  render() {
    const total = this.state.monthlyPrice * this.state.duration
    const commission = total * 0.15
    return (
      <div className="App">
        <header className="App-header">
          <img
            style={{ borderRadius: '200px' }}
            src={person}
            className="App-logo mt-5"
            alt="logo"
          />
          <h1 className="App-title">Drover Delight</h1>
          <h4>What can we do to make the customer surprised and delighted?</h4>
        </header>

        <div className="mt-5 calculator">
          <strong>
            <label>Monthly Price</label>
          </strong>
          <input
            onChange={e => this.handleChange(e, 'monthlyPrice')}
            type="text"
            value={this.state.monthlyPrice}
          />
          <strong className="mt-5">
            <label>Total Months</label>
          </strong>
          <input
            onChange={e => this.handleChange(e, 'duration')}
            type="text"
            value={this.state.duration}
          />
          <strong className="mt-5">
            <label>Total Value: </label>
          </strong>
          £{total}
          <strong className="mt-5">
            <label>Commission: </label>
          </strong>
          £{commission}
        </div>
        <h1>
          Great! They're eligible for <strong>{this.renderPerks()}</strong>
        </h1>

        {commission < 500 && (
          <div>
            <h2>Plus</h2>
            <p>Drover branded delivery box</p>
            <p>Drover branded keychain</p>
            <p>Drover branded sweets</p>
            <p>Aux cable/usb charger</p>
            <p>Fuel card</p>
          </div>
        )}
        {commission > 500 && (
          <div>
            <h2>Premium</h2>
            <p>Luxury Drover branded delivery box</p>
            <p>Personalised Drover keychain</p>
            <p>Hard-case key box</p>
            <p>Key locator</p>
            <p>Phone holder</p>
          </div>
        )}
      </div>
    )
  }
}

export default App
