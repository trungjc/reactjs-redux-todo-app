import React,{ Component } from 'react';
import Note from './Note';
import NoteForm from './NoteForm';
import {connect} from 'react-redux';

class List extends Component {

    render() {
        return(
            <div>
                <NoteForm ></NoteForm>
                <hr/>
                <div className="list">
                    {this.props.mang.map( (e,i) => <Note index={i}  key={i}>{e}</Note>)}
                </div>
            </div>
        )
    }
}

export default connect(function (state) {
    return {
        mang: state.mang
    }
})(List);