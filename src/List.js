import React, { Component } from "react";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      addCount: 0, //insertions counter
      delCount: 0, //removes counter
      curCount: 0  //total items 
    };
    this.handleChange = this.handleChange.bind(this);
  }

  onChangeValue = e => {
    this.setState({ value: e.target.value });
  };

  delElem = () => {
    this.state.items.pop();
    this.setState({ delCount: this.state.delCount + 1 });
  }

  addElem = () => {
    this.state.items.push({ text: Math.random() });
    this.setState({ addCount: this.state.addCount + 1 });
    this.setState({ curCount: this.state.curCount + 1 });
  }

  render() {
    return (
      <div>
        <h3>List of elements</h3>
        <form onSubmit={this.handleSubmit}>
          <lable htmlFor="elem"> You can manage with list using theese buttons </lable>
          <input style={{ cursor: 'pointer' }} type="button" value="Add" onClick={this.addElem}></input>
          <input style={{ cursor: 'pointer' }} type="button" value="Delete" onClick={this.delElem}></input>
        </form>
        <div> {this.state.delCount} elements were deleted </div>
        <div> {this.state.addCount} elements were added </div>
        <FooList items={this.state.items} />
      </div>
    )
  }
  handleChange(e) {
    this.setState({ title: e.target.value });
  }

}

class FooList extends Component {
  render() {
    return (
      <ul>
        Total:
        {this.props.items.length} elements
        {this.props.items.map(item => (
          <li>{item.text}</li>
        ))}
      </ul>
    );
  }
}