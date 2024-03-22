/**
 * Copyright (c) 2021, RTE (http://www.rte-france.com)
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { LIGHT_THEME } from '../components/TopBar/TopBar';

export const TYPE_TAG_MAX_SIZE = '90px';
export const VL_TAG_MAX_SIZE = '100px';

export const equipmentStyles = {
    equipmentOption: {
        display: 'flex',
        gap: '20px',
        width: '100%',
        margin: '0px',
        padding: '0px',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    equipmentTag: (theme: string) => ({
        borderRadius: '10px',
        padding: '4px',
        fontSize: 'x-small',
        textAlign: 'center',
        color: theme === LIGHT_THEME ? 'inherit' : 'black',
    }),
    equipmentTypeTag: {
        minWidth: TYPE_TAG_MAX_SIZE,
        maxWidth: TYPE_TAG_MAX_SIZE,
        background: 'lightblue',
    },
    equipmentVlTag: {
        width: VL_TAG_MAX_SIZE,
        minWidth: VL_TAG_MAX_SIZE,
        maxWidth: VL_TAG_MAX_SIZE,
        background: 'lightgray',
        fontStyle: 'italic',
    },
    result: {
        width: '100%',
        padding: '2px',
    },
};

export enum EquipmentType {
    SUBSTATION = 'SUBSTATION',
    LOAD = 'LOAD',
    GENERATOR = 'GENERATOR',
    LINE = 'LINE',
    TWO_WINDING_TRANSFORMER = 'TWO_WINDINGS_TRANSFORMER',
    BATTERY = 'BATTERY',
    SHUNT_COMPENSATOR = 'SHUNT_COMPENSATOR',
    VOLTAGE_LEVEL = 'VOLTAGE_LEVEL',
    BUSBAR_SECTION = 'BUSBAR_SECTION',
    DANGLING_LINE = 'DANGLING_LINE',
    HVDC_LINE = 'HVDC_LINE',
    THREE_WINDINGS_TRANSFORMER = 'THREE_WINDINGS_TRANSFORMER',
    STATIC_VAR_COMPENSATOR = 'STATIC_VAR_COMPENSATOR',
    HVDC_CONVERTER_STATION = 'HVDC_CONVERTER_STATION',
    VSC_CONVERTER_STATION = 'VSC_CONVERTER_STATION',
    LCC_CONVERTER_STATION = 'LCC_CONVERTER_STATION',
    BUS = 'BUS',
    SWITCH = 'SWITCH',
}

// Must be equivalent as the back enum
export const EQUIPMENT_TYPE: Record<
    EquipmentType,
    { name: EquipmentType; tagLabel: string } | undefined
> = {
    [EquipmentType.SUBSTATION]: {
        name: EquipmentType.SUBSTATION,
        tagLabel: 'equipment_search/substationTag',
    },
    [EquipmentType.VOLTAGE_LEVEL]: {
        name: EquipmentType.VOLTAGE_LEVEL,
        tagLabel: 'equipment_search/voltageLevelTag',
    },
    [EquipmentType.LINE]: {
        name: EquipmentType.LINE,
        tagLabel: 'equipment_search/lineTag',
    },
    [EquipmentType.TWO_WINDING_TRANSFORMER]: {
        name: EquipmentType.TWO_WINDING_TRANSFORMER,
        tagLabel: 'equipment_search/2wtTag',
    },
    [EquipmentType.THREE_WINDINGS_TRANSFORMER]: {
        name: EquipmentType.THREE_WINDINGS_TRANSFORMER,
        tagLabel: 'equipment_search/3wtTag',
    },
    [EquipmentType.HVDC_LINE]: {
        name: EquipmentType.HVDC_LINE,
        tagLabel: 'equipment_search/hvdcLineTag',
    },
    [EquipmentType.GENERATOR]: {
        name: EquipmentType.GENERATOR,
        tagLabel: 'equipment_search/generatorTag',
    },
    [EquipmentType.BATTERY]: {
        name: EquipmentType.BATTERY,
        tagLabel: 'equipment_search/batteryTag',
    },
    [EquipmentType.LOAD]: {
        name: EquipmentType.LOAD,
        tagLabel: 'equipment_search/loadTag',
    },
    [EquipmentType.SHUNT_COMPENSATOR]: {
        name: EquipmentType.SHUNT_COMPENSATOR,
        tagLabel: 'equipment_search/shuntTag',
    },
    [EquipmentType.DANGLING_LINE]: {
        name: EquipmentType.DANGLING_LINE,
        tagLabel: 'equipment_search/lineTag',
    },
    [EquipmentType.STATIC_VAR_COMPENSATOR]: {
        name: EquipmentType.STATIC_VAR_COMPENSATOR,
        tagLabel: 'equipment_search/svcTag',
    },
    [EquipmentType.HVDC_CONVERTER_STATION]: {
        name: EquipmentType.HVDC_CONVERTER_STATION,
        tagLabel: 'equipment_search/hvdcStationTag',
    },
    [EquipmentType.BUSBAR_SECTION]: {
        name: EquipmentType.BUSBAR_SECTION,
        tagLabel: 'equipment_search/busbarSectionTag',
    },
    [EquipmentType.BUS]: {
        name: EquipmentType.BUS,
        tagLabel: 'equipment_search/busTag',
    },
    [EquipmentType.SWITCH]: {
        name: EquipmentType.SWITCH,
        tagLabel: 'equipment_search/switchTag',
    },
    [EquipmentType.VSC_CONVERTER_STATION]: undefined,
    [EquipmentType.LCC_CONVERTER_STATION]: undefined,
};

export interface Identifiable {
    id: string;
    name?: string;
}

export interface Equipment extends Identifiable {
    type: EquipmentType;
    voltageLevels?: Identifiable[];
}

export interface EquipmentInfos extends Identifiable {
    label: string;
    key: string;
    type: EquipmentType;
    voltageLevelLabel?: string;
    voltageLevelId?: string;
}

export const getEquipmentsInfosForSearchBar = (
    equipmentsInfos: Equipment[],
    getNameOrId: (e: Identifiable) => string
) => {
    return equipmentsInfos.flatMap((e): EquipmentInfos[] => {
        let label = getNameOrId(e);
        return e.type === EquipmentType.SUBSTATION
            ? [
                  {
                      label: label,
                      id: e.id,
                      key: e.id,
                      type: e.type,
                  },
              ]
            : e.voltageLevels?.map((vli) => {
                  return {
                      label: label,
                      id: e.id,
                      key: e.id + '_' + vli.id,
                      type: e.type,
                      voltageLevelLabel: getNameOrId(vli),
                      voltageLevelId: vli.id,
                  };
              }) ?? [];
    });
};
