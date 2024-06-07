/**
 * Copyright (c) 2023, RTE (http://www.rte-france.com)
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import React, { MutableRefObject, useEffect, useRef } from 'react';
import { FormattedMessage } from 'react-intl';
import { useController } from 'react-hook-form';

export type ErrorMessage =
    | {
          id: string;
          value: string;
      }
    | string;

export interface ErrorInputProps {
    name: string;
    InputField: ({
        message,
    }: {
        message: string | React.ReactNode;
    }) => React.ReactNode;
}

function ErrorInput({ name, InputField }: Readonly<ErrorInputProps>) {
    const {
        fieldState: { error },
        formState: { isSubmitting },
    } = useController({
        name,
    });

    const errorRef: MutableRefObject<any> = useRef(null);

    const errorProps = (errorMsg: ErrorMessage) => {
        if (typeof errorMsg === 'string') {
            return {
                id: errorMsg,
            };
        }
        if (typeof errorMsg === 'object') {
            return {
                id: errorMsg.id,
                values: {
                    value: errorMsg.value,
                },
            };
        }
        return {};
    };

    useEffect(() => {
        // the scroll should be done only when the form is submitting
        if (error && errorRef.current) {
            errorRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [error, isSubmitting]);

    if (error?.message) {
        return (
            <div ref={errorRef}>
                {InputField({
                    message: (
                        <FormattedMessage {...errorProps(error?.message)} />
                    ),
                })}
            </div>
        );
    }

    return null;
}

export default ErrorInput;
