"use client";
import TextField, { type TextFieldProps } from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";

type InputProps = TextFieldProps & { name: string };

export const Input: React.FC<InputProps> = ({ name, ...props }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          helperText={fieldState.error?.message}
          {...field}
          {...props}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "var(--neutral-dark)",
              },
              "&:hover fieldset": {
                borderColor: "var(--accent-primary)",
              },
              "&.Mui-focused fieldset": {
                borderColor: "var(--accent-primary)",
              },
            },
            "& .MuiFormLabel-root": {
              color: "var(--foreground-secondary)",
              "&.Mui-focused": {
                color: "var(--accent-primary)",
              },
            },
            "& .MuiFormHelperText-root": {
              color: "var(--accent-primary)",
            },
          }}
        />
      )}
    />
  );
};
