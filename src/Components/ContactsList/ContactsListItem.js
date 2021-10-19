import PropType from 'prop-types';
import './ContactsList.css';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className="Contacts__item">
      {name}: {number}
      <button
        className="Contacts__btn"
        type="submit"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.prototype = {
  id: PropType.number.isRequired,
  name: PropType.string.isRequired,
  number: PropType.number.isRequired,
  onDeleteContact: PropType.func.isRequired,
};

export default ContactItem;
