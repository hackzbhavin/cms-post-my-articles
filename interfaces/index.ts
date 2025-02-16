import { ButtonVariants } from "../enums";

export interface IPostProps {
  id: string;
  slug: string;
  title: string;
  content: string;
  createdAt: any;
  updatedAt: any;
}

export interface IPostPreviewProps {
  postDetails: IPostProps;
  showActions?: boolean;
  isPreviewMode?: boolean;
  onEdit?: () => void;
  onBack?: () => void;
}

export interface IPostCardProps {
  postDetails: IPostProps;
  onDelete: (slug: string) => void;
}

export interface IButtonProps {
  onPress: () => void;
  isDisabled?: boolean;
  variant: ButtonVariants;
  textLabel: string;
  type?: "submit";
}

export interface IDeletePopupProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}
