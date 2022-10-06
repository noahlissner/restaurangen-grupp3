import { MenuItem } from "./menuItemComponent";

/**
 * Admin menu component.
 *
 * Content: none
 *
 * @returns menu.
 */

export const AdminMenu = () => {
  return (
    <>
      <div className="menu">
        <MenuItem type="dashboard" />
        <MenuItem type="search" />
        <MenuItem type="calendar" />
        <MenuItem type="create" />
      </div>
    </>
  );
};
