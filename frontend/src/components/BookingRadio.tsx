interface IProps {
  name: string;
  value: string;
  title: string;
  checked: string;
  onChange: any;
}

const BookingRadio = ({ value, checked, onChange, title, name }: IProps) => {
  return (
    <label
      htmlFor={value}
      className={`booking-radio ${checked === value && "isChecked"}`}
    >
      <input
        type="radio"
        name={name}
        id={value}
        value={value}
        checked={checked === value}
        onChange={onChange}
      />
      <span className={`${checked === value && "isChecked"}`}>{title}</span>
    </label>
  );
};

export default BookingRadio;
