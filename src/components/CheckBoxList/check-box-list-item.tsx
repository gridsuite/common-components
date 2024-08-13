/**
 * Copyright (c) 2024, RTE (http://www.rte-france.com)
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { useState } from 'react';
import { Checkbox, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import OverflowableText from '../OverflowableText';
import { CheckBoxListItemProps } from './check-box-list-type';

export function CheckBoxListItem<T>({
    item,
    sx,
    label,
    onClick,
    secondaryAction,
    getItemId,
    divider,
    disabled,
    isCheckboxClickableOnly,
    ...props
}: CheckBoxListItemProps<T>) {
    const [hover, setHover] = useState<string>('');
    return (
        <ListItem
            secondaryAction={secondaryAction?.(item, hover)}
            sx={sx?.checkboxList}
            onMouseEnter={() => setHover(getItemId(item))}
            onMouseLeave={() => setHover('')}
            disablePadding
            divider={divider}
        >
            <ListItemButton
                sx={sx?.checkboxButton}
                disabled={disabled}
                {...(!isCheckboxClickableOnly && {
                    onClick: () => onClick(),
                })}
            >
                <ListItemIcon sx={sx?.checkBoxIcon}>
                    <Checkbox
                        disableRipple
                        sx={sx?.checkbox}
                        {...(isCheckboxClickableOnly && {
                            onClick: () => onClick(),
                        })}
                        {...props}
                    />
                </ListItemIcon>
                <ListItemText sx={{ display: 'flex' }} disableTypography>
                    <OverflowableText sx={sx?.label} text={label} />
                </ListItemText>
            </ListItemButton>
        </ListItem>
    );
}

export default CheckBoxListItem;
