import React, { Component } from "react";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [],
                   text: ''  
                  };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChangeValue = e => {
    this.setState({ value: e.target.value });
  };
  onAddItem = () => {
    this.setState(state => {
      const list = [...state.list, {id:state.countIds, title:state.value}];
      const countIds = state.countIds + 1;
      const count = state.count + 1;
      const countAdd = state.countAdd + 1;
      return {list, value: '', count, countAdd, countIds};
    });
  };


  render() {
    return (
      <div>
        <h3>List of elements</h3>

        <form onSubmit={this.handleSubmit}>
          <lable htmlFor="elem">Enter new element </lable>
          <input
            id="elem"
            onChange={this.handleChange}
            value={this.state.text}
            style={{
              width: "200px",
              flex: 1,
              justifyContent: 'space-between',
              padding: 4,
              flexDirection: 'row',
              alignItems: 'center'
            }}
          />
          <button
            id="AddButton"
            style={{ padding: 4, width: "90px" }}
          >Submit</button>

        </form>
        <FooList items={this.state.items} />
      </div>
    )
  }
  handleChange(e) {
    this.setState({ text: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class FooList extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}