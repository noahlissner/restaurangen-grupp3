import { AdminContent } from "./contentComponent";
import { AdminMenu } from "./menuComponent";

/**
 * Admin dashboard component.
 *
 * Content: none
 *
 * @returns "logga", {@link AdminContent}, {@link AdminMenu}.
 */

export const AdminDashboard = () => {
  return (
    <>
      <div>logga</div>
      {/* Ersätts med logo-component */}
      <AdminContent />
      <AdminMenu />
    </>
  );
};
