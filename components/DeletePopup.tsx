import { BUTTON, MODAL } from "../constants";
import { ButtonVariants } from "../enums";
import { IDeletePopupProps } from "../interfaces";
import { Button } from "./Button";



export default function DeletePopup({
  isOpen,
  onClose,
  onConfirm,
}: IDeletePopupProps) {
  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="popup">
        <div className="popup-body">
          <h2 className="popup-title">{MODAL.DELETE_POST}</h2>
          <p className="popup-message">{MODAL.DELETE_POST_CONFIRM}</p>
        </div>
        <div className="popup-footer">
          <Button
            onPress={onClose}
            textLabel={BUTTON.CANCEL}
            variant={ButtonVariants.TERTIARY}
          />
          <button className="delete-btn" onClick={onConfirm}>
            {BUTTON.YES_DELETE}
          </button>
        </div>
      </div>
    </div>
  );
}
