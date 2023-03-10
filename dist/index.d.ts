/// <reference types="react" />
import { FieldValues, Path, UseControllerProps } from 'react-hook-form';
import { AutocompleteProps, TextFieldProps, CheckboxProps } from '@mui/material';
import { ChangeEvent } from 'react';

type OptionAutocompleteMultiple<TData> = {
    label: string;
    value: number | string;
    data?: TData;
};
type MUIHookFormAutocompleteMultipleProps<TData, TFieldValues extends FieldValues = FieldValues, TName extends Path<TFieldValues> = Path<TFieldValues>> = {
    name: string;
    label: string;
    options: OptionAutocompleteMultiple<TData>[];
    handleOnChange?: (option: OptionAutocompleteMultiple<TData>[]) => void;
} & UseControllerProps<TFieldValues, TName> & Omit<AutocompleteProps<any, any, any, any>, "renderInput">;

declare const MUIHookFormAutocompleteMultiple: <TData extends unknown, TFieldValues extends FieldValues = FieldValues, TName extends Path<TFieldValues> = Path<TFieldValues>>({ control, name, label, options, handleOnChange, ...autoCompleteProps }: MUIHookFormAutocompleteMultipleProps<TData, TFieldValues, TName>) => JSX.Element;

type OptionAutocomplete<TData> = {
    label: string;
    value: number | string;
    data?: TData;
};
type MUIHookFormAutocompleteProps<TData, TFieldValues extends FieldValues = FieldValues, TName extends Path<TFieldValues> = Path<TFieldValues>> = {
    name: string;
    label: string;
    options: OptionAutocomplete<TData>[];
    handleOnChange?: (option: OptionAutocomplete<TData>) => void;
} & UseControllerProps<TFieldValues, TName> & Omit<AutocompleteProps<any, any, any, any>, "renderInput">;

declare const MUIHookFormAutocomplete: <TData extends unknown, TFieldValues extends FieldValues = FieldValues, TName extends Path<TFieldValues> = Path<TFieldValues>>({ control, name, label, options, handleOnChange, ...autoCompleteProps }: MUIHookFormAutocompleteProps<TData, TFieldValues, TName>) => JSX.Element;

type MUIHookFormTextFieldProps<TFieldValues extends FieldValues = FieldValues, TName extends Path<TFieldValues> = Path<TFieldValues>> = {
    handleOnChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined) => void;
} & UseControllerProps<TFieldValues, TName> & TextFieldProps;

declare const MUIHookFormTextField: <TFieldValues extends FieldValues = FieldValues, TName extends Path<TFieldValues> = Path<TFieldValues>>({ control, name, defaultValue, handleOnChange, ...textFieldProps }: MUIHookFormTextFieldProps<TFieldValues, TName>) => JSX.Element;

type MUIHookFormCheckboxProps<TFieldValues extends FieldValues = FieldValues, TName extends Path<TFieldValues> = Path<TFieldValues>> = {
    handleOnChange?: (checked: boolean) => void;
    label: string;
} & UseControllerProps<TFieldValues, TName> & CheckboxProps;
declare const MUIHookFormCheckbox: <TFieldValues extends FieldValues = FieldValues, TName extends Path<TFieldValues> = Path<TFieldValues>>({ control, name, label, handleOnChange, }: MUIHookFormCheckboxProps<TFieldValues, TName>) => JSX.Element;

type OptionSelect = {
    label: string;
    value: number | string;
};
type MuiHookFormSelectProps<TFieldValues extends FieldValues = FieldValues, TName extends Path<TFieldValues> = Path<TFieldValues>> = {
    name: string;
    label: string;
    options: OptionSelect[];
    showDefaultOption?: boolean;
} & UseControllerProps<TFieldValues, TName>;

declare const MuiHookFormSelect: <TFieldValues extends FieldValues = FieldValues, TName extends Path<TFieldValues> = Path<TFieldValues>>({ control, name, label, options, showDefaultOption, }: MuiHookFormSelectProps<TFieldValues, TName>) => JSX.Element;

type OptionRadio = {
    label: string;
    value: number | string;
};
type MUIHookFormRadioProps<TFieldValues extends FieldValues = FieldValues, TName extends Path<TFieldValues> = Path<TFieldValues>> = {
    handleOnChange?: (value: string) => void;
    label: string;
    options: OptionRadio[];
    row?: boolean;
} & UseControllerProps<TFieldValues, TName>;

declare const MUIHookFormRadio: <TFieldValues extends FieldValues = FieldValues, TName extends Path<TFieldValues> = Path<TFieldValues>>({ control, name, label, options, row, handleOnChange, }: MUIHookFormRadioProps<TFieldValues, TName>) => JSX.Element;

export { MUIHookFormAutocomplete, MUIHookFormAutocompleteMultiple, MUIHookFormCheckbox, MUIHookFormRadio, MUIHookFormTextField, MuiHookFormSelect };
