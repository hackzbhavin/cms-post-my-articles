import { BUTTON } from "../constants";
import { ButtonVariants } from "../enums";
import { IButtonProps } from "../interfaces";

export const Button = ({
  onPress,
  isDisabled = false,
  variant,
  textLabel,
  type,
}: IButtonProps) => {
  const getButtonClass = () => {
    switch (variant) {
      case ButtonVariants.PRIMARY:
        return "primary-btn";
      case ButtonVariants.SECONDARY:
        return "secondary-btn";
      case ButtonVariants.TERTIARY:
        return "tertiary-btn";
      default:
        return "";
    }
  };

  return (
    <button
      className={`common-btn ${getButtonClass()}`}
      onClick={onPress}
      disabled={isDisabled}
      type={type}
    >
      {textLabel ? textLabel : BUTTON.MY_BUTTON}
    </button>
  );
};
