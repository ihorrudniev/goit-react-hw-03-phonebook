import React, { Component } from 'react';
import PropType from 'prop-types';
import shortid from 'shortid';
import './Form.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: shortid.generate(),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.onSubmit(contact);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        <label className="Form__label" htmlFor={this.nameInputId}>
          Name{' '}
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            value={name}
            onChange={this.handleChange}
            // onChange={() => onToggleCompleted(id)}
            id={this.nameInputId}
            required
          />
        </label>
        <br />
        <label className="Form__label" htmlFor={this.numberInputId}>
          Number{' '}
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            value={number}
            onChange={this.handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

Form.PropType = { onSubmit: PropType.func.isRequired };

export default Form;
