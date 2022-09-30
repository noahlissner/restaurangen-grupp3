import { useContext } from "react";
import { Heading, Text } from "../styled/adminStyled";
import { Bookings } from "./bookingsComponent";
import { AdminCalendar } from "./calendarComponent";
import { ContentContext, Menu } from "./dashboardComponent";

/**
 * Admin content component.
 *
 * Content: none
 *
 * @returns content.
 */
export const AdminContent = () => {
  const content = useContext(ContentContext)[0] as Menu;

  switch (content) {
    case Menu.Dashboard:
      return (
        <>
          <Heading>Dagens bokningar.</Heading>
          <Bookings list="today" />
          <Heading>Morgondagens bokningar.</Heading>
          <Text dim>Just nu finns det inga bokningar.</Text>
        </>
      );
    case Menu.Calendar:
      return (
        <>
          <AdminCalendar source="calendar" />
        </>
      );
    case Menu.Search:
      return (
        <>
          <Heading>Search</Heading>
        </>
      );
    case Menu.Create:
      return (
        <>
          <Heading>Skapa ny bokning.</Heading>
          <AdminCalendar source="create" />
        </>
      );
    default:
      return (
        <>
          <Heading>Dagens bokningar.</Heading>
          <Bookings list="today" />
          <Heading>Morgondagens bokningar.</Heading>
          <Text>Just nu finns det inga bokningar</Text>
        </>
      );
  }
};
