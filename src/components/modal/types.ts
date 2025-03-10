export type ModalBoxProps = {
  modalMinWidth?: string;
};

export type StyledModalProps = {
  isOpen: boolean;
};

export type ModalContentProps = {
  contentMaxHeight?: string;
  alignText?: "left" | "right" | "center";
};

export type ModalAction = {
  onAction: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void;
  label: string;
  disabled?: boolean;
  severity: "low" | "medium" | "high";
  order: number;
};
export type BackgroundProps = {
  isOpen?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
export type ModalProps = {
  isOpen: boolean;
  onClose?: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void;
  actions: ModalAction[];
  contentLabel: string;
  children: React.ReactNode;
};
