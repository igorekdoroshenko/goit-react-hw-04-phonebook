import React from 'react';
import PropTypes from 'prop-types';
import { FilterWrapper, FilterLabel, FilterInput } from './Filter.style';

export default function Filter ({ value, onChangeFilter }) {
  return (
    <FilterWrapper>
      <FilterLabel>
        Find contacts by name
        <FilterInput type="text" value={value} onChange={onChangeFilter} />
      </FilterLabel>
    </FilterWrapper>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
 