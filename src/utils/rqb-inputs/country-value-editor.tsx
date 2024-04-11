/**
 * Copyright (c) 2023, RTE (http://www.rte-france.com)
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { ValueEditorProps } from 'react-querybuilder';
import { MaterialValueEditor } from '@react-querybuilder/material';
import { Autocomplete, TextField } from '@mui/material';
import useConvertValue from './use-convert-value';
import useValid from './use-valid';
import { useLocalizedCountries } from '../localized-countries-hook.js';

interface CountryValueEditorProps {
    paramGlobalState: unknown;
    updateParam: (param: unknown) => Promise<unknown>;
}

const CountryValueEditor = (
    props: ValueEditorProps & CountryValueEditorProps
) => {
    const { translate, countryCodes } = useLocalizedCountries();

    // When we switch to 'in' operator, we need to switch the input value to an array and vice versa
    useConvertValue(props);

    const valid = useValid(props);

    // The displayed component totally depends on the value type and not the operator. This way, we have smoother transition.
    if (!Array.isArray(props.value)) {
        return (
            <MaterialValueEditor
                {...props}
                values={countryCodes}
                title={undefined} // disable the tooltip
            />
        );
    } else {
        return (
            <Autocomplete
                value={props.value}
                options={countryCodes}
                getOptionLabel={(code: string) => translate(code)}
                onChange={(event, value: any) => props.handleOnChange(value)}
                multiple
                fullWidth
                renderInput={(params) => (
                    <TextField {...params} error={!valid} />
                )}
            />
        );
    }
};
export default CountryValueEditor;
