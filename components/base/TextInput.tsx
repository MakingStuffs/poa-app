import { InputProps } from "types";
import { useState } from "react";

const TextInput: React.FC<InputProps> = ({ ...rest }) => {
  const [value, setValue] = useState<string>("");

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValue(event.target.value);
  };

  return <input value={value} type="text" onChange={changeHandler} {...rest} />;
};

export default TextInput;
