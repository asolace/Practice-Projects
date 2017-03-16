import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Output from  './Components/Output.js';
import Select from  './Components/Controls/Select.js';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			paras: 4,
			html: true,
			text: ''
		}
	}

	componentWillMount(){
		this.getSampleText();
	}

	getSampleText(){
		axios.get('http://hipsterjesus.com/api?paras=' + this.state.paras + '&html=' + this.state.html)
			.then((responce) => {
				this.setState({text: responce.data.text}, function(){
					console.log(this.state);
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	showHtml(x){
		this.setState({html: x}, this.getSampleText);
	}

  render() {
    return (
      <div className="App container">
      	<h1>ReactJS Text Generator</h1>
      	<hr />
      	<form className="form-inline">
      		<div className="form-group">
      			<label>Include HTML:</label>
      			<Select value={this.state.html} onChange={this.showHtml.bind(this)}></Select>
      		</div>
      	</form>
        <Output value={this.state.text} />
      </div>
    );
  }
}

export default App;
