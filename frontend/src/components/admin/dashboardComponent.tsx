import { createContext, Dispatch, SetStateAction, useState } from "react";
import { AdminContent } from "./contentComponent";
import { AdminMenu } from "./menuComponent";

export enum Menu {
  Dashboard = "dashboard",
  Calendar = "calendar",
  Search = "search",
  Create = "create",
}

type ContextValue = Menu | (Menu | Dispatch<SetStateAction<Menu>>)[];

export const ContentContext = createContext<ContextValue>(Menu.Dashboard);

/**
 * Admin dashboard component.
 *
 * Content: none
 *
 * @returns "logga", {@link AdminContent}, {@link AdminMenu}.
 */

export const AdminDashboard = () => {
  // eslint-disable-next-line
  const [content, setContent] = useState<Menu>(Menu.Dashboard);
  // console.log(content);

  return (
    <>
      <ContentContext.Provider value={[content, setContent]}>
        <div className="content">
          <AdminContent />
        </div>
        <AdminMenu />
      </ContentContext.Provider>
    </>
  );
};
