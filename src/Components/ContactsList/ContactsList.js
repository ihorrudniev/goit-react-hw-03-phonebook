import ContactItem from './ContactsListItem';
import PropTypes from 'prop-types';
import './ContactsList.css';

const ContactsList = ({ findContact, onDeleteContact }) => {
  return (
    <ul className="ContactsList__item">
      {findContact().map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </ul>
  );
};

ContactsList.prototype = {
  findContact: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
