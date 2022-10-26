
import React from 'react';
import PropTypes from "prop-types";
import { List, Item ,Button} from './ContactList.style';


const ContactList = ({ contacts, onDeleteContact }) => {

  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <Item
          key={id}>
          {name} : {number}
          <Button onClick={() => onDeleteContact(id)}>Delete</Button>
        </Item>
         );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

 export default ContactList;



