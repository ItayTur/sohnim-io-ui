import MuiButton, { type ButtonProps } from "@mui/material/Button";

const stylesByVarientsMap: Record<
  NonNullable<ButtonProps["variant"]>,
  ButtonProps["sx"]
> = {
  contained: {
    backgroundColor: "var(--accent-primary)",
    color: "var(--foreground-primary)",
  },
  outlined: {
    /* your styles here */
  },
  text: {
    /* your styles here */
  },
};

export const Button = (props: ButtonProps) => {
  const { variant = "contained", ...rest } = props;
  return <MuiButton sx={stylesByVarientsMap[variant]} {...rest} />;
};
