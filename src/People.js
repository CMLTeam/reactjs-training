import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {personAdded, personRemoved} from "./redux/actions";

function Person(props) {
    return (
        <div className={'person'}>
            <b>{props.firstName}</b>
            {' '}
            <i>{props.lastName}</i>
            {' '}
            <button type={'button'} className={'btn btn-sm btn-danger'}
                    onClick={() => {
                        props.onRemove(props.idx)
                    }}>Remove
            </button>
        </div>
    );
}

class PersonList extends Component {
    static propTypes = {};

    state = {
        newFirstName: '',
        newLastName: '',
    };

    componentDidMount() {
        console.info('componentDidMount')
    };

    componentWillMount() {
        console.info('componentWillMount')
    }

    componentWillUnmount() {
        console.info('componentWillUnmount')
    }

    addPerson = () => {
        this.props.handleAddPerson(this.state.newFirstName, this.state.newLastName)
    };

    removePerson = (idx) => {
        this.props.handleRemovePerson(idx)
    };

    fieldChanged = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            ...this.state,
            [name]: value
        })
    };

    render() {
        return <div className={'people'}>
            <button type={'button'} className={'btn btn-primary'} onClick={this.addPerson}>Add</button>
            {' '}
            <input name={'newFirstName'} value={this.state.newFirstName} onChange={this.fieldChanged}/>
            {' '}
            <input name={'newLastName'} value={this.state.newLastName} onChange={this.fieldChanged}/>
            <div>
                {
                    this.props.people.map((p, idx) =>
                        <Person key={idx} idx={idx} {...p} onRemove={this.removePerson}/>
                    )
                }
            </div>
        </div>
    }
}

const createPerson = (firstName, lastName) => ({
    firstName,
    lastName
});

const mapStateToProps = (state) => ({
    people: state.people
});
const mapDispatchToProps = (dispatch) => ({
    handleAddPerson: (firstName, lastName) => {
        dispatch(personAdded(firstName, lastName))
    },
    handleRemovePerson: (idx) => {
        dispatch(personRemoved(idx));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonList);
export {createPerson};


