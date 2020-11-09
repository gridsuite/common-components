/**
 * Copyright (c) 2020, RTE (http://www.rte-france.com)
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import React, { createRef, useEffect } from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const Notification = (props) => {
    const { enqueueSnackbar } = useSnackbar();
    const variant = props.variant;

    useEffect(() => {
        if (props) {
            enqueueSnackbar(props.message, { variant });
        }
    }, [enqueueSnackbar, props, variant]);

    return <Paper></Paper>;
};

const SnackBar = (props) => {
    const notistackRef = createRef();
    const showNotification = props.showNotification;

    const onClickDismiss = (key) => () => {
        notistackRef.current.closeSnackbar(key);
    };

    return (
        <>
            {showNotification && (
                <SnackbarProvider
                    maxSnack={props.maxSnack}
                    anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
                    hideIconVariant
                    ref={notistackRef}
                    action={(key) => (
                        <Button
                            onClick={onClickDismiss(key)}
                            style={{ color: '#fff', fontSize: '20px' }}
                        >
                            ✖
                        </Button>
                    )}
                >
                    <Notification
                        message={props.message}
                        variant={props.variant}
                    />
                </SnackbarProvider>
            )}
        </>
    );
};

SnackBar.propTypes = {
    message: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    maxSnack: PropTypes.number.isRequired,
    showNotification: PropTypes.bool.isRequired,
};

export default SnackBar;
