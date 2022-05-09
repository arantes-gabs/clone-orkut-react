import React from 'react';

import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import './input-with-tags.scss';

export default ({
  apiValues = [],
  inputLabel = '',
  suggestions = [],
  tagColor = 'primary',
  inputPlaceholder = '',
  inputColor = 'primary',
  tagHandleDelete = () => { }
}) => {

  return (
    <Autocomplete
      multiple
      options={suggestions}
      defaultValue={apiValues}
      freeSolo
      renderTags={(value, getTagProps) =>
        value.map((option, index) => {
          return (
            <Chip
              {...getTagProps({ index })}
              label={option}
              color={tagColor}
              onDelete={tagHandleDelete}
            />
          )
        })
      }
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            variant='outlined'
            color={inputColor}
            label={inputLabel}
            placeholder={inputPlaceholder}
          />
        )
      }}
    />
  )
}
