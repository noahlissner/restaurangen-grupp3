import styled from "styled-components";

interface IProps {
  error?: boolean;
  align?: "flex-start" | "flex-end" | "center";
  today?: boolean;
  active?: boolean;
  halfWidth?: boolean;
  fullWidth?: boolean;
  expand?: boolean;
}

interface IChevronProps {
  side: "left" | "right";
}

interface ITextProps {
  fontSize?: string;
  color?: string;
  small?: boolean;
  block?: boolean;
  alignRight?: boolean;
  dim?: boolean;
  gridArea?: string;
}

interface IGridprops {
  columns?: number;
  rows: number;
}

interface IDateProps {
  selected?: boolean;
  disabled?: boolean;
  today?: boolean;
  right?: boolean;
  left?: boolean;
}

export const LoginContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: min(90%, 400px);
`;

export const Label = styled.label`
  font-size: var(--font-size-md);
`;

export const Input = styled.input<IProps>`
  position: relative;
  width: 100%;
  border: ${(props) => (props.error ? `var(--border-error)` : "var(--border)")};
  border-radius: var(--border-radius);
  padding: var(--padding-sm);
  font-size: var(--font-size-md);
  &:focus {
    outline: none;
    border: var(--border-focus);
  }
`;

export const Button = styled.button`
  border: var(--border);
  border-radius: var(--border-radius);
  padding: var(--padding-sm) var(--padding-md);
  cursor: pointer;
  background-color: #fff;
  transition: var(--transition);
  align-self: flex-end;
  -webkit-tap-highlight-color: transparent;
  &:hover {
    border: var(--border-focus);
  }
  &:focus {
    outline: none;
    border: var(--border-focus);
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  ${(props: IProps) => props.fullWidth && "grid-column: 1 / -1;"}
  ${(props: IProps) => props.halfWidth && "grid-column: span 3;"}
`;

export const LoginButton = styled(Button)``;

export const Heading = styled.h2`
  font-size: var(--font-size-lg);
  font-weight: 400;
`;

export const Message = styled.p<IProps>`
  font-size: var(--font-size-md);
  font-weight: 400;
  color: ${(props) => (props.error ? "var(--color-error)" : "black")};
  align-self: ${(props) => props.align || "flex-start"};
`;

export const Text = styled.span`
  font-size: ${(props: ITextProps) =>
    props.small ? "var(--font-size-sm)" : "var(--font-size-md)"};
  color: ${(props) => props.color || "black"};
  display: ${(props) => (props.block ? "block" : "inline")};
  grid-column: ${(props) => (props.block ? "1 / 3" : "auto")};
  justify-self: ${(props) => (props.alignRight ? "flex-end" : "auto")};
  opacity: ${(props) => (props.dim ? "0.5" : "1")};
  ${(props) => props.gridArea && `grid-area: ${props.gridArea};`}
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  min-width: 150px;
  ${(props: IProps) =>
    props.expand &&
    `
    position: fixed;
    width: 90vw;
    height: 90vh;
    z-index: 100;
  `}
  padding: var(--padding-sm);
  border: var(--border-focus);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  transition: var(--transition-fast);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  &:hover {
    box-shadow: var(--box-shadow-hover);
    transform: var(--transform-hover);
  }
  &:active {
    box-shadow: var(--box-shadow-active);
    transform: var(--transform-active);
  }
`;

export const IconContainer = styled.div`
  display: flex;
  place-content: center;
  width: 50px;
  height: 50px;
  background-color: #fff;
  border: var(--border-focus);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  transition: var(--transition-fast);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  &:hover {
    box-shadow: var(--box-shadow-hover);
    transform: var(--transform-hover);
  }
  &:active {
    box-shadow: var(--box-shadow-active);
    transform: var(--transform-active);
  }
`;

export const Icon = styled.img`
  place-self: center;
  color: #000;
  width: 35px;
  height: 35px;
`;

export const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(2, 1fr) auto;
  grid-template-areas:
    ". left header header header right ."
    "day day day day day day day"
    "dates dates dates dates dates dates dates";
  gap: 0.5rem;
  width: min(100%, 600px);
`;

export const CalendarHeader = styled.section`
  grid-area: header;
  display: flex;
  flex-direction: column;
  place-items: center;
`;

export const CalendarDays = styled.section`
  grid-area: day;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 1fr;
  grid-template-areas: "mon tue wed thu fri sat sun";
  align-items: center;
  flex-direction: row;
  place-items: center;
  gap: 0.5rem;
`;

export const CalendarDatesContainer = styled.section`
  grid-area: dates;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(${(props: IGridprops) => props.rows}, 1fr);
  gap: 0.5rem;
`;

export const CalendarDate = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  opacity: ${(props: IDateProps) => (props.disabled ? "0.4" : "1")};
  width: 100%;
  height: 50px;
  user-select: none;
  border: var(--border-focus);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: var(--transition-fast);
  &:hover {
    box-shadow: var(--box-shadow-hover);
    transform: var(--transform-hover);
  }
  ${(props: IDateProps) =>
    props.selected &&
    `
    box-shadow: var(--box-shadow-selected);
    transform: var(--transform-selected);
    &:hover {
      box-shadow: var(--box-shadow-selected);
    transform: var(--transform-selected);
    }

  `}
  &:active {
    box-shadow: var(--box-shadow-active);
    transform: var(--transform-active);
  }
`;

export const ChevronContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  place-self: center;
  width: 20px;
  height: 20px;
  background-color: #fff;
  ${(props: IChevronProps) => props.side && `grid-area: ${props.side};`}
  &:active > img {
    transform: ${(props: IChevronProps) =>
      props.side === "left"
        ? "var(--transform-active)"
        : "var(--transform-active-inv)"};
  }
`;

export const Chevron = styled.img`
  place-self: center;
  transition: var(--transition-fast);
  user-select: none;
`;

export const ChevronLeft = styled(Chevron)`
  &:hover {
    transform: var(--transform-hover);
  }
  &:active {
    transform: var(--transform-active);
  }
`;

export const ChevronRight = styled(Chevron)`
  &:hover {
    transform: var(--transform-hover-inv);
  }
  &:active {
    transform: var(--transform-active-inv);
  }
`;

export const QuantityContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.5rem;
  width: min(100%, 600px);
`;

export const CredentialsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.5rem;
  width: min(100%, 600px);
`;

export const SelectQuantity = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  ${(props: IDateProps) => props.right && "grid-column: 5/7;"}
  ${(props: IDateProps) => props.left && "grid-column: 5/7;"}
  opacity: ${(props: IDateProps) => (props.disabled ? "0.4" : "1")};
  ${(props: IDateProps) => props.disabled && "pointer-events:none;"}
  width: 100%;
  height: 50px;
  user-select: none;
  border: var(--border-focus);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: var(--transition-fast);
  &:hover {
    box-shadow: var(--box-shadow-hover);
    transform: var(--transform-hover);
  }
  ${(props: IDateProps) =>
    props.selected &&
    `
    box-shadow: var(--box-shadow-selected);
    transform: var(--transform-selected);
    &:hover {
      box-shadow: var(--box-shadow-selected);
    transform: var(--transform-selected);
    }

  `}
  &:active {
    box-shadow: var(--box-shadow-active);
    transform: var(--transform-active);
  }
`;

export const SelectQuantityInput = styled.input`
  ${(props: IDateProps) => props.right && "grid-column: 5/7;"}
  ${(props: IDateProps) => props.left && "grid-column: 1/5;"}

  outline: none;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  user-select: none;
  border: var(--border-focus);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: var(--transition-fast);
  &:hover {
    box-shadow: var(--box-shadow-hover);
    transform: var(--transform-hover);
  }
  ${(props: IDateProps) =>
    props.selected &&
    `
    box-shadow: var(--box-shadow-selected);
    transform: var(--transform-selected);
    &:hover {
      box-shadow: var(--box-shadow-selected);
    transform: var(--transform-selected);
    }

  `}
  &:active {
    box-shadow: var(--box-shadow-active);
    transform: var(--transform-active);
  }
`;
