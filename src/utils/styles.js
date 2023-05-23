/**
 * Copyright (c) 2023, RTE (http://www.rte-france.com)
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

//TODO do we need to export this to clients (index.js) ?

// like mui sx(slot)/class merging but simpler with less features
// TODO use their system ? But it's named unstable_composeClasses so not supported?
export const makeComposeClasses =
    (generateGlobalClass) => (classes, ruleName) =>
        [generateGlobalClass(ruleName), classes[ruleName]]
            .filter((x) => x)
            .join(' ');

export const toNestedGlobalSelectors = (styles, generateGlobalClass) =>
    Object.fromEntries(
        Object.entries(styles).map(([k, v]) => [
            `& .${generateGlobalClass(k)}`,
            v,
        ])
    );

// https://mui.com/system/getting-started/the-sx-prop/#passing-the-sx-prop
// You cannot spread or concat directly because `SxProps` (typeof sx) can be an array. */
// same as [{}, ...(Array.isArray(sx) ? sx : [sx])]
export const mergeSx = (...allSx) => allSx.flat();
