import React , { Component } from 'react';


/*const SearchBar = React.createClass({

  render: function() {
    return (
      <div>
        <input onChange={this.onInpChange}/>
      </div>
    );
  },

  onInpChange(event){
      console.log(event.target.value);
  }
});*/


class SearchBar extends Component{

  constructor(props){
    super(props);
    this.state = {term: ''};
    this.onInpChange = this.onInpChange.bind(this);
    //console.log();
  }
  render() {
    return (
      <div className="listPadding">
        <input
        className = "form-control"
        value = {this.state.term}
        placeholder='Please enter a title to search'
        onChange={event => this.onInpChange(event.target.value)} />
      </div>
    );
  }

  onInpChange(term){
      this.setState({term});
      this.props.onSearchChange(term);
  }
}

/*export default class SearchBar extends Component {
  render() {
    return (
      <div>Hello there app js</div>
    );
  }
}*/

export default SearchBar;
