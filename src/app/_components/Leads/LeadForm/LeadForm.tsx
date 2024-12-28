"use client";

import { api } from "@/trpc/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogContent } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { Button, DialogActions, DialogTitle, Input } from "../../UI";
import {
  LeadFormFields,
  type LeadFormValues,
  leadSchema,
} from "./LeadForm.consts";
import styles from "./LeadForm.module.css";
import { getDefaultLead } from "./LeadForm.utils";

export const LeadForm = () => {
  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: getDefaultLead(),
  });
  const createLead = api.lead.createLead.useMutation();
  const utils = api.useUtils();

  const onSubmit = async (values: LeadFormValues) => {
    // Simulate form submission
    const newLead = await createLead.mutateAsync(values);
    await utils.lead.getLeads.invalidate();
    form.reset();
    alert(`Lead ${newLead.firstName} submitted successfully! `);
  };

  return (
    <FormProvider {...form}>
      <DialogTitle>Create Lead</DialogTitle>
      <DialogContent>
        <form className={styles.form}>
          <Input
            name={LeadFormFields.FirstName}
            id={LeadFormFields.FirstName}
            label="First Name"
            className={styles.input}
          />

          <Input
            name={LeadFormFields.LastName}
            id={LeadFormFields.LastName}
            label="Last Name"
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
          <Button
            type="submit"
            className={styles.submitButton}
            disabled={form.formState.isSubmitting}
            onClick={form.handleSubmit(onSubmit)}
          >
            {form.formState.isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </DialogActions>
      </DialogContent>
    </FormProvider>
  );
};
