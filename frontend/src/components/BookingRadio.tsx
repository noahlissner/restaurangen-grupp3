interface IProps {
  name: string;
  value: string;
  title: string;
  checked: string;
  onChange: any;
  disabled?: boolean;
}

const BookingRadio = ({
  value,
  checked,
  onChange,
  title,
  name,
  disabled,
}: IProps) => {
  return (
    <label
      htmlFor={value}
      className={`booking-radio ${disabled && "booking-radio--disabled"} ${
        checked === value && "isChecked"
      }`}
    >
      <input
        type="radio"
        name={name}
        id={value}
        value={value}
        checked={checked === value}
        onChange={onChange}
        disabled={disabled}
      />
      <span className={`${checked === value && "isChecked"}`}>{title}</span>
    </label>
  );
};

export default BookingRadio;
