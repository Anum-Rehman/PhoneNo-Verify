import React from 'react';
import { TextField } from '@material-ui/core';

export default function InputText(props) {
    return (
        <TextField
            value={props.value}
            onChange={
                props.Change
            }
            onBlur={props.Blur}
            id="formatted-text-mask-input"
            error={props.error}
            helperText={props.text}
        />
    )
}