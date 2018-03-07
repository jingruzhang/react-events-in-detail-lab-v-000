// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component {
	click = (event) => {
		event.persist();
		setTimeout(()=>{
			this.props.onDelayedClick(event)
		}, this.props.delay)
	}

	render() {
		return(
			<div>
				<button onClick={this.click} />
			</div>
		)
	}
}