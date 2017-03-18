import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminder } from '../actions';
import moment from 'moment';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			dueDate: ''
		}
	}

	addReminder() {
		this.props.addReminder(this.state.text, this.state.dueDate);
	}

	deleteReminder(id) {
		this.props.deleteReminder(id);
	}

	renderReminders() {
		const { reminders } = this.props;
			return (
				<ul className="list-group col-sm-4">
					{
						reminders.map(reminder => {
							return (
								<li key={reminder.id} className="list-group-item">
									<div className="list-item">
										<div>{reminder.text}</div>
										<div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
									</div>
									<div onClick={() => this.deleteReminder(reminder.id)}className='list-item delete-btn'>&#x2715;</div>
								</li>
							)
						})
					}
				</ul>
			)
	}

	render() {
		return (
			<div className="App">
				<div className="title">Reminder App</div>
				<div className="form-inline reminder-form">
					<div className="form-group">
						<input 
							onChange={event => this.setState({text: event.target.value})} 
							className="form-control" 
							placeholder="I have to..." 
						/>
						<input 
							onChange={event => this.setState({dueDate: event.target.value})}
							className="form-control" 
							type="datetime-local" />
					</div>
					<button onClick={() => this.addReminder()} type="button" className="btn btn-success">Add Reminder</button>
					{ this.renderReminders() }
					<div className="btn btn-danger" onClick={() => this.props.clearReminder()}>Clear Reminders</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { reminders: state }
}

export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminder })(App);
