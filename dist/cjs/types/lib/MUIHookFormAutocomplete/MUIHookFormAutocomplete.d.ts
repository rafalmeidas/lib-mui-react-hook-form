/// <reference types="react" />
import { FieldValues, Path } from "react-hook-form";
import { MUIHookFormAutocompleteProps } from "./types";
declare const MUIHookFormAutocomplete: <TData extends unknown, TFieldValues extends FieldValues = FieldValues, TName extends Path<TFieldValues> = Path<TFieldValues>>({ control, name, label, options, handleOnChange, ...autoCompleteProps }: MUIHookFormAutocompleteProps<TData, TFieldValues, TName>) => JSX.Element;
export default MUIHookFormAutocomplete;
