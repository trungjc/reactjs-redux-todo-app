import React,{ Component } from 'react';
import {connect} from 'react-redux';

import {removeItem} from '../actions/actions';
class Note extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    removeNote() {

        var {index,dispatch} = this.props;
        dispatch(removeItem(index));


    }
    render() {
        return(
            <div>
                <p> {this.props.children}</p>
                <button onClick={this.removeNote.bind(this)}>Delete</button>
            </div>
        )
    }
}



export default connect()(Note);