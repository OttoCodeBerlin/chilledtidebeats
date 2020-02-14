import React, { Component } from 'react'
import Card from '../components/Card'

export default class Animals extends Component {
  render() {
    return (
      <div className="card-deck d-flex justify-content-around mt-5">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    )
  }
}
