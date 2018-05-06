import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {addItem,toggle} from '../actions/actions';
class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {isAdding: false}
    }
    handleSubmit(e) {
        e.preventDefault();
        var dispatch = this.props.dispatch;
        dispatch(addItem(this.refs.txt.value));
        dispatch(toggle());
    }
    toggle() {
       var dispatch = this.props.dispatch;
       dispatch(toggle());
    }
    render() {
        if(this.props.isAdding) return(
            <div className="form">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" placeholder="Enter your text" ref="txt" />
                    <br/>
                    <button>Add</button>
                </form>
            </div>
        )
        return <button onClick={this.toggle.bind(this)}>+</button>
    }
}


export default connect(function (state) {
    return {
        isAdding: state.isAdding
    }
})(NoteForm);