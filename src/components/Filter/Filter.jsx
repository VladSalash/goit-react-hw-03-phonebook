import PropTypes from 'prop-types';
import { Label, Input } from './Filter.style';

const Filter = ({ value, inputFilterContact }) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={value} onChange={inputFilterContact}></Input>
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  inputFilterContact: PropTypes.func.isRequired,
};

export default Filter;
