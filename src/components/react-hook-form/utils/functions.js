import React from 'react';
import { FormattedMessage } from 'react-intl';
import { getIn } from 'yup';

export function genHelperPreviousValue(previousValue, adornment) {
    return {
        ...((previousValue || previousValue === 0) && {
            error: false,
            helperText:
                previousValue + (adornment ? ' ' + adornment?.text : ''),
        }),
    };
}

export function genHelperError(...errors) {
    const inError = errors.find((e) => e);
    if (inError) {
        return {
            error: true,
            helperText: <FormattedMessage id={inError} />,
        };
    }
    return {};
}

export function identity(x) {
    return x;
}

export const isFieldRequired = (fieldName, schema, values) => {
    const { schema: fieldSchema, parent: parentValues } =
        getIn(schema, fieldName, values) || {};
    return fieldSchema.describe({ parent: parentValues })?.optional === false;

    //static way, not working when using "when" in schema, but does not need form values
    //return yup.reach(schema, fieldName)?.exclusiveTests?.required === true;
};
