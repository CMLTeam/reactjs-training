import React, {Component} from 'react';
import PropTypes from 'prop-types';

function Person(props) {
    return (
        <div className={'person'}>
            <b>{props.firstName}</b>{' '}
            <i>{props.lastName}</i>
            {' '}
            <button type={'button'} className={'btn btn-sm btn-danger'}
                onClick={() => {props.onRemove(props.idx)}}>Remove</button>
        </div>
    );
}

class PersonList extends Component {
    static propTypes = {
    };

    state = {
        people: [],
        newFirstName: '',
        newLastName: '',
    };

    componentDidMount() {
        this.setState({people: [
                createPerson('Ivan', 'Durak'),
                createPerson('Alesha', 'Popovich'),
                createPerson('Danila', 'Galitsky'),
                createPerson('Freddy', 'Mercury'),
            ]});
    };

    addPerson = () => {
        this.setState({people: [
                ...this.state.people,
                createPerson(this.state.newFirstName, this.state.newLastName)
            ]});
    };

    removePerson = (idx) => {
        console.info('Removing', idx)
        const people = this.state.people;
        people.splice(idx,1);
        this.setState({people})
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
            <input name={'newFirstName'} value={this.state.newFirstName} onChange={this.fieldChanged} />
            {' '}
            <input name={'newLastName'} value={this.state.newLastName} onChange={this.fieldChanged} />
            <div>
                {
                    this.state.people.map((p,idx) =>
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

export default PersonList;
export {createPerson};


