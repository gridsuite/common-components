/**
 * Copyright (c) 2023, RTE (http://www.rte-france.com)
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { ValueEditorProps } from 'react-querybuilder';
import { useCallback } from 'react';
import { MaterialValueEditor } from '@react-querybuilder/material';
import Box from '@mui/material/Box';
import { useFormContext } from 'react-hook-form';
import CountryValueEditor from './CountryValueEditor';
import TranslatedValueEditor from './TranslatedValueEditor';
import TextValueEditor from './TextValueEditor';

import { DataType, FieldType } from '../../filter/expert/expertFilter.type';
import FieldConstants from '../../../utils/constants/fieldConstants';
import { Substation, VoltageLevel } from '../../../utils/types/equipmentTypes';
import ElementValueEditor from './ElementValueEditor';
import { ElementType } from '../../../utils/types/elementType';
import PropertyValueEditor from './PropertyValueEditor';
import { FilterType } from '../../filter/constants/FilterConstants';
import GroupValueEditor from './compositeRuleEditor/GroupValueEditor';
import { OPERATOR_OPTIONS } from '../../filter/expert/expertFilterConstants';
import { MuiStyles } from '../../../utils/styles';

const styles = {
    noArrows: {
        '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
            display: 'none',
        },
        '& input[type=number]': {
            MozAppearance: 'textfield',
        },
    },
} as const satisfies MuiStyles;

function ValueEditor(props: ValueEditorProps) {
    const { field, operator, value, rule, handleOnChange, inputType, fieldData } = props;
    const formContext = useFormContext();
    const { getValues } = formContext;
    const itemFilter = useCallback(
        (filterValue: any) => {
            if (filterValue?.type === ElementType.FILTER) {
                return (
                    // we do not authorize to use an expert filter in the rules of
                    // another expert filter, to prevent potential cycle problems
                    filterValue?.specificMetadata?.type !== FilterType.EXPERT.id &&
                    ((field === FieldType.ID &&
                        filterValue?.specificMetadata?.equipmentType === getValues(FieldConstants.EQUIPMENT_TYPE)) ||
                        ((field === FieldType.VOLTAGE_LEVEL_ID ||
                            field === FieldType.VOLTAGE_LEVEL_ID_1 ||
                            field === FieldType.VOLTAGE_LEVEL_ID_2 ||
                            field === FieldType.VOLTAGE_LEVEL_ID_3) &&
                            filterValue?.specificMetadata?.equipmentType === VoltageLevel.type))
                );
            }
            return true;
        },
        [field, getValues]
    );

    if (operator === OPERATOR_OPTIONS.EXISTS.name || operator === OPERATOR_OPTIONS.NOT_EXISTS.name) {
        // No value needed for these operators
        return null;
    }

    if ([FieldType.COUNTRY, FieldType.COUNTRY_1, FieldType.COUNTRY_2].includes(field as FieldType)) {
        return <CountryValueEditor {...props} />;
    }

    if (fieldData.dataType === DataType.ENUM) {
        return <TranslatedValueEditor {...props} />;
    }

    if (operator === OPERATOR_OPTIONS.IS_PART_OF.name || operator === OPERATOR_OPTIONS.IS_NOT_PART_OF.name) {
        let equipmentTypes;
        if (
            field === FieldType.VOLTAGE_LEVEL_ID ||
            field === FieldType.VOLTAGE_LEVEL_ID_1 ||
            field === FieldType.VOLTAGE_LEVEL_ID_2 ||
            field === FieldType.VOLTAGE_LEVEL_ID_3
        ) {
            equipmentTypes = [VoltageLevel.type];
        } else if (field === FieldType.ID) {
            equipmentTypes = [getValues(FieldConstants.EQUIPMENT_TYPE)];
        }

        return (
            <ElementValueEditor
                name={DataType.FILTER_UUID + rule.id}
                elementType={ElementType.FILTER}
                equipmentTypes={equipmentTypes}
                titleId="selectFilterDialogTitle"
                hideErrorMessage
                onChange={(e: any) => {
                    handleOnChange(e.map((v: any) => v.id));
                }}
                itemFilter={itemFilter}
                defaultValue={value}
            />
        );
    }

    if (fieldData.dataType === DataType.STRING) {
        return <TextValueEditor {...props} />;
    }

    if (fieldData.dataType === DataType.PROPERTY) {
        let equipmentType;
        if (
            field === FieldType.SUBSTATION_PROPERTY ||
            field === FieldType.SUBSTATION_PROPERTY_1 ||
            field === FieldType.SUBSTATION_PROPERTY_2 ||
            field === FieldType.SUBSTATION_PROPERTY_3
        ) {
            equipmentType = Substation.type;
        } else if (
            field === FieldType.VOLTAGE_LEVEL_PROPERTY ||
            field === FieldType.VOLTAGE_LEVEL_PROPERTY_1 ||
            field === FieldType.VOLTAGE_LEVEL_PROPERTY_2 ||
            field === FieldType.VOLTAGE_LEVEL_PROPERTY_3
        ) {
            equipmentType = VoltageLevel.type;
        } else {
            equipmentType = getValues(FieldConstants.EQUIPMENT_TYPE);
        }

        return <PropertyValueEditor equipmentType={equipmentType} valueEditorProps={props} />;
    }

    if (fieldData.dataType === DataType.COMBINATOR) {
        return <GroupValueEditor {...props} />;
    }

    return (
        <Box sx={inputType === 'number' ? styles.noArrows : undefined}>
            <MaterialValueEditor
                {...props}
                title={undefined} // disable the tooltip
            />
        </Box>
    );
}
export default ValueEditor;
