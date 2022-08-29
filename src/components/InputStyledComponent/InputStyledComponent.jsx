import React from 'react';
import { Input, Label, InputGroup, ErrorLeyend, ValidationIcon } from '../../styledComponents/styledComponents';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const InputStyledComponent = (
    { 
        state,
        changeState,
        type,
        label,
        placeholder,
        name,
        errorLeyend,
        regularExpression,
        functionData
    }
) => {
    const onChange = (e) => {
        changeState({ ...state, field: e.target.value });
    }

    const validation = () => {
        if (regularExpression) {
            if (regularExpression.test(state.field)) {
                changeState({ ...state, valid: 'true' });
            } else {
                changeState({ ...state, valid: 'false' });
            }
        }

        if (functionData) {
            functionData();
        }
    }

    return (
        <div>
            <Label htmlFor={name} valid={state.valid}>{label}</Label>
            <InputGroup>
                <Input
                    type={type}
                    placeholder={placeholder}
                    id={name}
                    value={state.field}
                    onChange={onChange}
                    onKeyUp={validation}
                    onBlur={validation}
                    valid={state.valid}
                />
                <ValidationIcon
                    icon={state.valid === 'true' ? faCheckCircle : faTimesCircle}
                    valid={state.valid}
                />
            </InputGroup>
            <ErrorLeyend valid={state.valid}>{errorLeyend}</ErrorLeyend>
        </div>
    );
}

export default InputStyledComponent;