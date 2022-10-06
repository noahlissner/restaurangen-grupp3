import { useState, MouseEvent } from "react";
import { QuantityContainer, SelectQuantity } from "../styled/adminStyled";

interface IProps {
  onSubmit: (amount: string) => void;
  availableTables: {
    available_18: boolean;
    available_21: boolean;
  };
  cancel: () => void;
  change?: boolean;
}

export const TimeComponent = ({
  onSubmit,
  cancel,
  availableTables,
  change,
}: IProps) => {
  const [time, setTime] = useState("");

  const handleTimeClick = (e: MouseEvent<HTMLDivElement>) => {
    setTime(e.currentTarget.dataset.time as string);
  };

  const handleSubmit = () => {
    onSubmit(time);
  };

  const cancelSubmission = () => {
    cancel();
  };

  return (
    <>
      <QuantityContainer>
        <SelectQuantity
          data-time={"18"}
          selected={time.includes("18")}
          onClick={handleTimeClick}
          disabled={availableTables.available_18 ? false : true}
        >
          18:00
        </SelectQuantity>
        <SelectQuantity
          data-time={"21"}
          selected={time.includes("21")}
          onClick={handleTimeClick}
          disabled={availableTables.available_21 ? false : true}
        >
          21:00
        </SelectQuantity>
        <SelectQuantity right onClick={handleSubmit}>
          {change ? "Ändra Bokning" : "Boka Bord"}
        </SelectQuantity>
        <SelectQuantity right onClick={cancelSubmission}>
          Ångra
        </SelectQuantity>
      </QuantityContainer>
    </>
  );
};
