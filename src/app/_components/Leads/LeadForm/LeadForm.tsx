"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { DialogContent } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { DialogActions, DialogTitle, Input } from "../../UI";
import {
  LeadFormFields,
  type LeadFormValues,
  leadSchema,
} from "./LeadForm.consts";
import styles from "./LeadForm.module.css";

export const LeadForm = () => {
  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
  });

  const onSubmit = async () => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    form.reset();
    alert("Lead submitted successfully!");
  };

  return (
    <FormProvider {...form}>
      <DialogTitle>Create Lead</DialogTitle>
      <DialogContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
          <Input
            name={LeadFormFields.Name}
            id={LeadFormFields.Name}
            label="Name"
            className={styles.input}
          />

          <Input
            name={LeadFormFields.Email}
            id={LeadFormFields.Email}
            type="email"
            label="Email"
            className={styles.input}
          />

          <Input
            name={LeadFormFields.Age}
            id={LeadFormFields.Age}
            type="number"
            label="Age"
            className={styles.input}
          />
        </form>
        <DialogActions>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </DialogActions>
      </DialogContent>
    </FormProvider>
  );
};
