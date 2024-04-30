/**
 * Copyright (c) 2024, RTE (http://www.rte-france.com)
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import FilterProperties, {
    filterPropertiesYupSchema,
    FreePropertiesTypes,
} from './filter-properties';
import { FieldConstants } from '../constants/field-constants';
import yup from '../../../utils/yup-config';
import CriteriaBasedForm from './criteria-based-form';
import Grid from '@mui/material/Grid';
import { FunctionComponent } from 'react';
import {
    FILTER_EQUIPMENTS,
    getCriteriaBasedFormData,
    getCriteriaBasedSchema,
} from '../utils/criteria-based-utils';

export const criteriaBasedFilterSchema = getCriteriaBasedSchema({
    [FieldConstants.ENERGY_SOURCE]: yup.string().nullable(),
    ...filterPropertiesYupSchema,
});

export const criteriaBasedFilterEmptyFormData = getCriteriaBasedFormData(null, {
    [FieldConstants.ENERGY_SOURCE]: null,
    [FreePropertiesTypes.SUBSTATION_FILTER_PROPERTIES]: [],
    [FreePropertiesTypes.FREE_FILTER_PROPERTIES]: [],
});

const CriteriaBasedFilterForm: FunctionComponent = () => {
    return (
        <Grid container item spacing={1}>
            <CriteriaBasedForm
                equipments={FILTER_EQUIPMENTS}
                defaultValues={
                    criteriaBasedFilterEmptyFormData[
                        FieldConstants.CRITERIA_BASED
                    ]
                }
            />
            <FilterProperties />
        </Grid>
    );
};

export default CriteriaBasedFilterForm;
