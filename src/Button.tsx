import { Component } from "solid-js";

export interface Props {
  onClick?: () => void;
  label: string
}

const Button: Component<Props> = (props) => {
  return (
    <button
      type="button"
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default Button;