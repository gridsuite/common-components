/**
 * Copyright (c) 2024, RTE (http://www.rte-france.com)
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

const filter_expert_en = {
    id: 'ID',
    name: 'Name',
    energySource: 'Energy source',
    country: 'Country',
    voltageRegulatorOn: 'Voltage regulation',
    PlannedActivePowerSetPoint: 'Planning active power set point (MW)',
    minP: 'Minimum active power (MW)',
    maxP: 'Maximum active power (MW)',
    targetP: 'Active power target (MW)',
    targetV: 'Voltage target (kV)',
    targetQ: 'Reactive power target (MVar)',
    connected: 'Connected',
    maximumSectionCount: 'Maximum number of sections',
    sectionCount: 'Current number of sections',
    shuntCompensatorType: 'Type',
    Capacitor: 'Capacitor',
    Reactor: 'Reactor',
    maxQAtNominalV: 'Available Qmax at nominal voltage (MVar)',
    SwitchedOnMaxQAtNominalV: 'Switch-on Q at nominal voltage (MVar)',
    maxSusceptance: 'Maximum available susceptance (S)',
    SwitchedOnMaxSusceptance: 'Switch-on susceptance (S)',
    ratedS: 'Rated nominal power (MVA)',
    marginalCost: 'Cost',
    plannedOutageRate: 'Planning outage rate',
    forcedOutageRate: 'Forced outage rate',
    vlId: 'Voltage level ID',
    p0: 'Constant P (MW)',
    q0: 'Constant Q (MVar)',
    loadTapChangingCapabilities: 'Ratio tap changer on-load',
    regulatingRatio: 'Ratio tap changer regulating',
    ratioTargetV: 'Ratio tap changer voltage set point (kV)',
    magnetizingConductance: 'Magnetizing conductance (μS)',
    magnetizingSusceptance: 'Magnetizing susceptance (μS)',
    vlNominalVoltage: 'Voltage level nominal voltage (kV)',
    lowVoltageLimit: 'Low voltage limit (kV)',
    highVoltageLimit: 'High voltage limit (kV)',
    selectFilterDialogTitle: 'Choose a filter',
    filter: 'Filter',
    loadType: 'Type',
    Undefined: 'Undefined',
    Auxiliary: 'Auxiliary',
    Fictitious: 'Fictitious',
    hasRatioTapChanger: 'Ratio tap changer exists',
    hasPhaseTapChanger: 'Phase tap changer exists',
    Voltage: 'Voltage',
    ReactivePower: 'Reactive power',
    CurrentLimiter: 'Current limiter',
    ActivePowerControl: 'Active power control',
    FixedTap: 'Fixed tap',
    ratioRegulationMode: 'Ratio tap changer regulation mode',
    phaseRegulationMode: 'Phase tap changer regulation mode',
    phaseRegulating: 'Phase tap changer regulating',
    phaseRegulationValue: 'Phase tap changer flow set point or current limit',
    property: 'Property',
    substationProperty: 'Substation property',
    substationProperty1: 'Substation property 1',
    substationProperty2: 'Substation property 2',
    ratedVoltage1KV: 'Rated Voltage 1 (kV)',
    ratedVoltage2KV: 'Rated Voltage 2 (kV)',
    nominalVoltage1KV: 'Nominal Voltage 1 (kV)',
    nominalVoltage2KV: 'Nominal Voltage 2 (kV)',
    voltageLevelProperty: 'Voltage level property',
    voltageLevelProperty1: 'Voltage level property 1',
    voltageLevelProperty2: 'Voltage level property 2',
    'maxQAtNominalV.svar': 'Q max at nominal voltage',
    minQAtNominalV: 'Q min at nominal voltage',
    fixQAtNominalV: 'Fixed part of Q at nominal voltage ',
    'maxSusceptance.svar': 'Susceptance max',
    minSusceptance: 'Susceptance min',
    svarRegulationMode: 'Regulation mode',
    'svarRegulationMode.off': 'Off',
    'svarRegulationMode.voltage': 'Voltage regulation',
    'svarRegulationMode.reactivePower': 'Reactive power regulation',
    voltageSetPoint: 'Voltage set point',
    reactivePowerSetPoint: 'Reactive power set point',
    regulatingTerminal: 'Regulating terminal',
    regulatingTerminalVLId: 'Voltage Level ID',
    regulatingTerminalConnectableId: 'Equipment ID',
    regulationType: 'Regulation type',
    'regulationType.distant': 'Distant regulation',
    'regulationType.local': 'Local regulation',
    automate: 'Automaton',
    lowVoltageSetPoint: 'Low voltage set point ',
    highVoltageSetPoint: 'High voltage set point',
    lowVoltageThreshold: 'Low voltage threshold',
    highVoltageThreshold: 'High voltage threshold',
    susceptanceFix: 'Fixed part of susceptance ',
};

export default filter_expert_en;
