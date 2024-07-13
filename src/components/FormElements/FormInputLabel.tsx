// import * as stylex from "@stylexjs/stylex";

type Props = {
  position: 'left' | 'right' | 'above' | 'below';
  name: string;
  label: string;
};

// const defStyles = stylex.create({
//   labelLeft: {
//     marginRight: "8px",
//   },
//   labelRight: {
//     marginLeft: "8px",
//   },
// });

export const FormInputLabel: React.FC<Props> = ({ position, name, label }) => {
  switch (position) {
    case 'left':
      return (
        // <label {...stylex.props(defStyles.labelLeft)} htmlFor={name}>
        <label htmlFor={name}>{label}</label>
      );
    case 'right':
      return (
        // <label {...stylex.props(defStyles.labelRight)} htmlFor={name}>
        <label htmlFor={name}>{label}</label>
      );
    case 'above':
      return (
        <>
          <label htmlFor={name}>{label}</label>
          <br />
        </>
      );
    case 'below':
      return (
        <>
          <br />
          <label htmlFor={name}>{label}</label>
        </>
      );
  }
};
