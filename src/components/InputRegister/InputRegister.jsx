import React from 'react'
import { Input, Label, InputGroup, ErrorLeyend, ValidationIcon } from '../../styledComponents/styledComponents'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const InputRegister = (
    {
        state,
        changeValidation,
        changeRegister,
        type,
        label,
        placeholder,
        name,
        errorLeyend,
        regularExpression,
        functionData
    }
) => {

    const onChangeData = (e) => {
        changeValidation(
            {
                ...state,
                field: e.target.value
            }
        );
        changeRegister(
            {
                ...state,
                [e.target.state]: e.target.value
            }
        );
    }

    const validation = () => {
        if (regularExpression) {
            if (regularExpression.test(state.field)) {
                changeValidation({ ...state, valid: 'true' })
            } else {
                changeValidation({ ...state, valid: 'false' })
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
                    name={name}
                    value={state.field}
                    onChange={onChangeData}
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

export default InputRegister;