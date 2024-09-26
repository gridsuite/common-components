/**
 * Copyright (c) 2024, RTE (http://www.rte-france.com)
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { SelectionForCopy } from '../filter.type';

export const DISTRIBUTION_KEY = 'distributionKey';

export const FilterType = {
    CRITERIA_BASED: { id: 'CRITERIA', label: 'filter.criteriaBased' },
    EXPLICIT_NAMING: { id: 'IDENTIFIER_LIST', label: 'filter.explicitNaming' },
    EXPERT: { id: 'EXPERT', label: 'filter.expert' },
};

export const NO_SELECTION_FOR_COPY: SelectionForCopy = {
    sourceItemUuid: null,
    nameItem: null,
    descriptionItem: null,
    parentDirectoryUuid: null,
    typeItem: null,
    specificTypeItem: null,
};
