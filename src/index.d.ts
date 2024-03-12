import type { FunctionComponent, ReactElement } from 'react';
import type {
    ButtonProps,
    SwitchProps,
    CheckboxProps,
    RadioGroupProps,
    SxProps,
    TextFieldProps,
} from '@mui/material';
import { UseSnackMessageReturn } from './hooks/useSnackMessage';
import { AutocompleteInputProps } from './components/react-hook-form/autocomplete-input';
import { ErrorInputProps } from './components/react-hook-form/error-management/error-input';

/**
 * Section to export generated type declarations of .ts or .tsx files
 */

export { useIntlRef } from './hooks/useIntlRef';
export { RawReadOnlyInput } from './components/react-hook-form/raw-read-only-input';
export {
    DirectoryItemsInputProps,
    DirectoryItemsInput,
} from './components/react-hook-form/directory-items-input';
export {
    DirectoryItemSelectorProps,
    DirectoryItemSelector,
} from './components/DirectoryItemSelector/directory-item-selector';
export { FilterCreationDialog } from './components/filter/filter-creation-dialog';
export { ExpertFilterEditionDialog } from './components/filter/expert/expert-filter-edition-dialog';

/**
 * Section to export manual type declarations of .js and .jsx files
 */

export const TopBar: FunctionComponent;

export function logout(
    dispatch: any,
    userManagerInstance: any
): Promise<any | undefined>;

export const DARK_THEME: string, LIGHT_THEME: string;

type Input = string | number;

export function useSnackMessage(): UseSnackMessageReturn;

export const AutocompleteInput: FunctionComponent<AutocompleteInputProps>;

export const ErrorInput: FunctionComponent<ErrorInputProps>;

export const SelectInput: FunctionComponent<SelectInputProps>;

export const MidFormError: FunctionComponent;

export const FieldErrorAlert: FunctionComponent;

type TextFieldWithAdornmentProps = TextFieldProps & {
    // variant already included in TextFieldProps
    value: Input; // we override the default type of TextFieldProps which is unknown
    adornmentPosition: string;
    adornmentText: string;
    handleClearValue?: () => void;
};

interface TextInputProps {
    name: string;
    label?: string;
    labelValues?: any; // it's for values from https://formatjs.io/docs/react-intl/components/#formattedmessage
    id?: string;
    adornment?: {
        position: string;
        text: string;
    };
    customAdornment?: ReactElement | null;
    outputTransform?: (value: string) => Input;
    inputTransform?: (value: Input) => string;
    acceptValue?: (value: string) => boolean;
    previousValue?: Input;
    clearable?: boolean;
    formProps?: Omit<
        TextFieldWithAdornmentProps | TextFieldProps,
        'value' | 'onChange' | 'inputRef' | 'inputProps' | 'InputProps'
    >;
}

export const TextInput: FunctionComponent<TextInputProps>;

export const FloatInput: FunctionComponent<
    Omit<
        TextInputProps,
        'outputTransform' | 'inputTransform' | 'acceptValue' // already defined in FloatInput
    >
>;

export const IntegerInput: FunctionComponent<
    Omit<
        TextInputProps,
        'outputTransform' | 'inputTransform' | 'acceptValue' // already defined in IntegerInput
    >
>;

interface RadioInputProps {
    name: string;
    label?: string;
    id?: string;
    options: Array<{
        id: string;
        label: string;
    }>;
    formProps?: Omit<RadioGroupProps, 'value'>;
}

export const RadioInput: FunctionComponent<RadioInputProps>;

interface SwitchInputProps {
    name: string;
    label?: string;
    formProps?: Omit<SwitchProps, 'disabled'>;
}

export const SwitchInput: FunctionComponent<SwitchInputProps>;

interface CheckboxInputProps {
    name: string;
    label?: string;
    formProps?: Omit<CheckboxProps, 'disabled'>;
}

export const CheckboxInput: FunctionComponent<CheckboxInputProps>;

export const SubmitButton: FunctionComponent<ButtonProps>;

type CancelButtonProps = ButtonProps & {
    color?: string;
};

export const CancelButton: FunctionComponent<CancelButtonProps>;

export const FieldLabel: FunctionComponent<{
    label: string;
    optional?: boolean;
    values?: any; // it's for values from https://formatjs.io/docs/react-intl/components/#formattedmessage
}>;

interface Parameters {
    name: string;
    description: string;
    type: string;
    defaultValue: any;
    possibleValues?: string[] | null;
}

interface FlatParametersProps extends Pick<TextFieldProps, 'variant'> {
    paramsAsArray: Parameters[];
    initValues: Record<string, any>;
    onChange: (paramName: string, value: any, isEdit: boolean) => void;
    showSeparator?: boolean;
    selectionWithDialog?: (parameters: Parameters) => boolean;
}

export const FlatParameters: FunctionComponent<FlatParametersProps>;

export function useDebounce(
    debouncedFunction: (...args: any[]) => void,
    debounceDelay: number
): (...args: any[]) => void;

interface OverflowableTextProps {
    sx?: SxProps;
    text?: string | ReactElement;
}

export const OverflowableText: FunctionComponent<OverflowableTextProps>;

export enum elementType {
    DIRECTORY = 'DIRECTORY',
    STUDY = 'STUDY',
    FILTER = 'FILTER',
    MODIFICATION = 'MODIFICATION',
    CONTINGENCY_LIST = 'CONTINGENCY_LIST',
    VOLTAGE_INIT_PARAMETERS = 'VOLTAGE_INIT_PARAMETERS',
    SECURITY_ANALYSIS_PARAMETERS = 'SECURITY_ANALYSIS_PARAMETERS',
    LOADFLOW_PARAMETERS = 'LOADFLOW_PARAMETERS',
    SENSITIVITY_PARAMETERS = 'SENSITIVITY_PARAMETERS',
}
