import { Card, Text } from "../styled/adminStyled";

interface IBooking {
  booking_id: number;
  name: string;
  customer_id: number;
  phone: string;
  email: string;
  quantity: number;
  date: Date;
}

export const BookingCard = ({ booking }: { booking: IBooking }) => {
  return (
    <>
      <Card>
        <Text>{booking.name}</Text>
        <Text alignRight>{booking.quantity}</Text>
        <Text block small alignRight>
          {booking.date.toDateString()}
        </Text>
        <Text block small dim>
          Bokningsnr:
          {booking.booking_id}
        </Text>
      </Card>
    </>
  );
};
