/// <reference types="react" />
import { UseControllerProps, FieldValues, Path } from "react-hook-form";
import { CheckboxProps } from "@mui/material";
type MUIHookFormCheckboxProps<TFieldValues extends FieldValues = FieldValues, TName extends Path<TFieldValues> = Path<TFieldValues>> = {
    handleOnChange?: (checked: boolean) => void;
    label: string;
} & UseControllerProps<TFieldValues, TName> & CheckboxProps;
declare const MUIHookFormCheckbox: <TFieldValues extends FieldValues = FieldValues, TName extends Path<TFieldValues> = Path<TFieldValues>>({ control, name, label, handleOnChange, }: MUIHookFormCheckboxProps<TFieldValues, TName>) => JSX.Element;
export default MUIHookFormCheckbox;
