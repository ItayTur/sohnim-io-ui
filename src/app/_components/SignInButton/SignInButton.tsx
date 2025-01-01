import { SignInButton as ClerkSignInButton } from "@clerk/nextjs";
import { Button } from "../UI";
import styles from "./SignInButton.module.css";

export const SignInButton = () => {
  return (
    <ClerkSignInButton>
      <Button className={styles.button}>תתחבר</Button>
    </ClerkSignInButton>
  );
};
