import { MouseEvent, useState } from "react";
import {
  QuantityContainer,
  SelectQuantity,
  SelectQuantityInput,
} from "../styled/adminStyled";

interface IProps {
  onSubmit: (amount: string) => void;
}

export const QuantityComponent = ({ onSubmit }: IProps) => {
  const [amount, setAmount] = useState("");
  const [amountCustomValue, setAmountCustomValue] = useState(false);

  const handleAmountClick = (e: MouseEvent<HTMLDivElement>) => {
    setAmountCustomValue(false);
    setAmount(e.currentTarget.dataset.amount as string);
  };

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmountCustomValue(true);
    setAmount(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(amount);
  };

  return (
    <>
      <QuantityContainer>
        {["1", "2", "3", "4", "5", "6"].map((number) => (
          <SelectQuantity
            data-amount={number}
            key={number}
            selected={amount === number}
            onClick={handleAmountClick}
          >
            {number}
          </SelectQuantity>
        ))}
        <SelectQuantityInput
          type="number"
          min={1}
          max={90}
          placeholder="7+"
          selected={amountCustomValue}
          onChange={handleCustomAmount}
          left
          onClick={() => {
            setAmountCustomValue(true);
          }}
        />
        <SelectQuantity right onClick={handleSubmit}>
          Sök Bord
        </SelectQuantity>
      </QuantityContainer>
    </>
  );
};
