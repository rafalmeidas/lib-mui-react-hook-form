/// <reference types="react" />
import { FieldValues, Path } from "react-hook-form";
import { MUIHookFormTextFieldProps } from "./types";
declare const MUIHookFormTextField: <TFieldValues extends FieldValues = FieldValues, TName extends Path<TFieldValues> = Path<TFieldValues>>({ control, name, defaultValue, handleOnChange, ...textFieldProps }: MUIHookFormTextFieldProps<TFieldValues, TName>) => JSX.Element;
export default MUIHookFormTextField;
