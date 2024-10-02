/**
 * Copyright (c) 2023, RTE (http://www.rte-france.com)
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { useFormContext, useWatch } from 'react-hook-form';
import { Box, Grid } from '@mui/material';
import { ReactElement, useEffect } from 'react';
import FieldConstants from '../../../utils/constants/fieldConstants';
import { FormEquipment } from '../utils/filterFormUtils';
import { useSnackMessage } from '../../../hooks/useSnackMessage';
import InputWithPopupConfirmation from '../../inputs/reactHookForm/selectInputs/InputWithPopupConfirmation';
import SelectInput from '../../inputs/reactHookForm/selectInputs/SelectInput';

export interface CriteriaBasedFormProps {
    equipments: Record<string, FormEquipment>;
    defaultValues: Record<string, any>;
    children?: ReactElement;
}

const styles = {
    ScrollableContainer: {
        paddingY: '12px',
        position: 'relative',
        '&::after': {
            content: '""',
            clear: 'both',
            display: 'block',
        },
    },
    ScrollableContent: {
        paddingY: '12px',
        position: 'absolute',
        width: '100%',
        height: '100%',
        minHeight: '200px',
        overflow: 'auto',
    },
};

function CriteriaBasedForm({ equipments, defaultValues, children }: Readonly<CriteriaBasedFormProps>) {
    const { getValues, setValue } = useFormContext();
    const { snackError } = useSnackMessage();

    const watchEquipmentType = useWatch({
        name: FieldConstants.EQUIPMENT_TYPE,
    });

    useEffect(() => {
        if (watchEquipmentType && !equipments[watchEquipmentType]) {
            snackError({
                headerId: 'obsoleteFilter',
            });
        }
    }, [snackError, equipments, watchEquipmentType]);

    const openConfirmationPopup = () => {
        return JSON.stringify(getValues(FieldConstants.CRITERIA_BASED)) !== JSON.stringify(defaultValues);
    };

    const handleResetOnConfirmation = () => {
        Object.keys(defaultValues).forEach((field) =>
            setValue(`${FieldConstants.CRITERIA_BASED}.${field}`, defaultValues[field])
        );
    };

    return (
        <>
            <Box sx={{ paddingTop: '10px' }}>
                <InputWithPopupConfirmation
                    Input={SelectInput}
                    name={FieldConstants.EQUIPMENT_TYPE}
                    options={Object.values(equipments)}
                    label="equipmentType"
                    shouldOpenPopup={openConfirmationPopup}
                    resetOnConfirmation={handleResetOnConfirmation}
                    message="changeTypeMessage"
                    validateButtonLabel="button.changeType"
                />
            </Box>
            <Box sx={styles.ScrollableContainer}>
                <Box sx={styles.ScrollableContent}>
                    <Grid container spacing={2}>
                        {watchEquipmentType &&
                            equipments[watchEquipmentType] &&
                            equipments[watchEquipmentType].fields.map((equipment: any, index: number) => {
                                const EquipmentForm = equipment.renderer;
                                const uniqueKey = `${watchEquipmentType}-${index}`;
                                return (
                                    <Grid item xs={12} key={uniqueKey} flexGrow={1}>
                                        <EquipmentForm {...equipment.props} />
                                    </Grid>
                                );
                            })}
                        {children}
                    </Grid>
                </Box>
            </Box>
        </>
    );
}

export default CriteriaBasedForm;
