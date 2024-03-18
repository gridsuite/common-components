/**
 * Copyright (c) 2024, RTE (http://www.rte-france.com)
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

export enum FieldConstants {
    ID = 'id',
    NAME = 'name',

    FILTER_TYPE = 'filterType',
    EQUIPMENT_TYPE = 'equipmentType',
    EQUIPMENT_TABLE = 'equipmentTable',

    EQUIPMENT_ID = 'equipmentID',
    EQUIPMENT_IDS = 'equipmentIDs',
    CONTINGENCY_NAME = 'contingencyName',
    COUNTRIES = 'countries',
    COUNTRIES_1 = 'countries1',
    COUNTRIES_2 = 'countries2',
    VALUE_1 = 'value1',
    VALUE_2 = 'value2',
    OPERATION_TYPE = 'type',
    CONTINGENCY_LIST_TYPE = 'contingencyListType',
    NOMINAL_VOLTAGE = 'nominalVoltage',
    NOMINAL_VOLTAGE_1 = 'nominalVoltage1',
    NOMINAL_VOLTAGE_2 = 'nominalVoltage2',
    NOMINAL_VOLTAGE_3 = 'nominalVoltage3',
    ENERGY_SOURCE = 'energySource',
    SCRIPT = 'script',
    AG_GRID_ROW_UUID = 'agGridRowUuid',
    CRITERIA_BASED = 'criteriaBased',
    STUDY_NAME = 'studyName',
    DESCRIPTION = 'description',
    CASE_FILE = 'caseFile',
    CASE_UUID = 'caseUuid',
    FORMATTED_CASE_PARAMETERS = 'formattedCaseParameters',
    CURRENT_PARAMETERS = 'currentParameters',
    CASE_FORMAT = 'caseFormat',
    API_CALL = 'apiCall',
    CASE_NAME = 'caseName',
    DIRECTORY = 'directory',
    EMPTY_RULE = 'emptyRule',
    EMPTY_GROUP = 'emptyGroup',
    INCORRECT_RULE = 'incorrectRule',
    BETWEEN_RULE = 'betweenRule',
}

export const FilterType = {
    CRITERIA_BASED: { id: 'CRITERIA', label: 'filter.criteriaBased' },
    EXPLICIT_NAMING: { id: 'IDENTIFIER_LIST', label: 'filter.explicitNaming' },
    EXPERT: { id: 'EXPERT', label: 'filter.expert' },
};

export const ContingencyListType = {
    CRITERIA_BASED: { id: 'FORM', label: 'contingencyList.criteriaBased' },
    EXPLICIT_NAMING: {
        id: 'IDENTIFIERS',
        label: 'contingencyList.explicitNaming',
    },
    SCRIPT: { id: 'SCRIPT', label: 'contingencyList.script' },
};
