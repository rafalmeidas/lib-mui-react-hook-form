/// <reference types="react" />
import { FieldValues, Path } from "react-hook-form";
import { MUIHookFormRadioProps } from "./types";
declare const MUIHookFormRadio: <TFieldValues extends FieldValues = FieldValues, TName extends Path<TFieldValues> = Path<TFieldValues>>({ control, name, label, options, row, handleOnChange, }: MUIHookFormRadioProps<TFieldValues, TName>) => JSX.Element;
export default MUIHookFormRadio;
