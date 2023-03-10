/// <reference types="react" />
import { FieldValues, Path } from "react-hook-form";
import { MUIHookFormAutocompleteMultipleProps } from "./types";
declare const MUIHookFormAutocompleteMultiple: <TData extends unknown, TFieldValues extends FieldValues = FieldValues, TName extends Path<TFieldValues> = Path<TFieldValues>>({ control, name, label, options, handleOnChange, ...autoCompleteProps }: MUIHookFormAutocompleteMultipleProps<TData, TFieldValues, TName>) => JSX.Element;
export default MUIHookFormAutocompleteMultiple;
