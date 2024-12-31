"use client";

import { api } from "@/trpc/react";
import { zodResolver } from "@hookform/resolvers/zod";
import DialogContent from "@mui/material/DialogContent";
import { FormProvider, useForm } from "react-hook-form";
import { Button, DialogActions, DialogTitle, Input } from "../../UI";
import {
  LeadFormFields,
  type LeadFormValues,
  leadSchema,
} from "./LeadForm.consts";
import styles from "./LeadForm.module.css";
import { type LeadFormProps } from "./LeadForm.types";
import { getDefaultLead } from "./LeadForm.utils";

export const LeadForm = ({ lead, onClose }: LeadFormProps) => {
  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: lead ?? getDefaultLead(),
  });
  const utils = api.useUtils();
  const createLead = api.lead.createLead.useMutation();
  const updateLead = api.lead.editLead.useMutation();
  const edit = Boolean(lead);

  const onSubmit = async (values: LeadFormValues) => {
    if (edit) {
      await updateLead.mutateAsync({ id: lead!.id, ...values });
    } else {
      await createLead.mutateAsync(values);
    }
    await utils.lead.getLeads.invalidate();
    onClose();
  };

  return (
    <FormProvider {...form}>
      <DialogTitle>{edit ? "Edit Lead" : "Create Lead"}</DialogTitle>
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
          <Button onClick={onClose}>Close</Button>
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
