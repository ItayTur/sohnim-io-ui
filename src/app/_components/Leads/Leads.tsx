import { Text } from "../UI";
import styles from "./Leads.module.css";
import { LeadsTable } from "./LeadsTable/LeadsTable";

export const Leads = () => {
  return (
    <div className={styles.leads}>
      <Text variant="h2" className={styles.leadsTitle} aria-label="leads table">
        Leads
      </Text>
      <LeadsTable />
    </div>
  );
};
