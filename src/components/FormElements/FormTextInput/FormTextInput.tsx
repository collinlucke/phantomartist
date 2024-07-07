import FormInputLabel from "../FormInputLabel";

type Props = {
  label?: string;
  name?: string;
  type?: "text" | "password" | "number";
  labelPos?: "left" | "right" | "above" | "below";
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormTextInput = ({
  label = "",
  name = "",
  type = "text",
  labelPos = "left",
  value = "",
  onChange,
}: Props) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  return (
    <div>
      {labelPos === "left" || labelPos === "above" ? (
        <FormInputLabel position={labelPos} name={name} label={label} />
      ) : (
        ""
      )}
      <input
        value={value}
        type={type}
        name={name}
        id={name}
        onChange={onChangeHandler}
      />
      {labelPos === "right" || labelPos === "below" ? (
        <FormInputLabel position={labelPos} name={name} label={label} />
      ) : (
        ""
      )}
    </div>
  );
};

export default FormTextInput;
