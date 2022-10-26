import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'
import { ContactsForm , Input, Label, Span, Button  } from './ContactForm.styled';

class Form extends Component {
  state = {
     name: '',
    number: '',
  }

  nameInputId = nanoid()
  numberInputId = nanoid()



    handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
    };

   handleSubmit = event => {
     event.preventDefault();


     this.props.onSubmit(this.state);
     this.reset();
   }

  reset = () => {
    this.setState({
      name: '',
    number: '',
    });
  }

  render() {
    return (
      <ContactsForm onSubmit={this.handleSubmit} >
          <Label htmlFor={this.nameInputId}>
           <Span>First Name</Span>
          <Input

          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
        />
          </Label>
          <Label htmlFor={this.numberInputId}>
            <Span>Phone Number</Span>
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
            onChange={this.handleChange}
            id={this.numberInputId}
            />
          </Label>

          <Button type="submit" > Add contact </Button>
        </ContactsForm>
    )
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
