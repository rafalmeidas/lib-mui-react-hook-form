/// <reference types="react" />
import { FieldValues, Path } from "react-hook-form";
import { MuiHookFormSelectProps } from "./types";
declare const MuiHookFormSelect: <TFieldValues extends FieldValues = FieldValues, TName extends Path<TFieldValues> = Path<TFieldValues>>({ control, name, label, options, showDefaultOption, }: MuiHookFormSelectProps<TFieldValues, TName>) => JSX.Element;
export default MuiHookFormSelect;
