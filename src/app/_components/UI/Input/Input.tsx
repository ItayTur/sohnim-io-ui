import TextField, { type TextFieldProps } from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";

type InputProps = TextFieldProps & { name: string };

export const Input: React.FC<InputProps> = ({ name, ...props }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <TextField {...field} {...props} />}
    />
  );
};
