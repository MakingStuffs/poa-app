export interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
  onSubmit: React.FormEventHandler;
}

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {}

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  clickHandler: React.MouseEventHandler<HTMLButtonElement>;
}

export interface DropDownProps extends React.HTMLAttributes<HTMLSelectElement> {
  changeCallback?: (event: React.ChangeEvent) => void;
}

export interface ListProps
  extends React.HTMLAttributes<HTMLUListElement | HTMLOListElement> {
  isOrdered: boolean;
}
