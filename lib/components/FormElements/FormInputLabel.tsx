type Props = {
  position: 'left' | 'right' | 'above' | 'below';
  name: string;
  label: string;
};

export const FormInputLabel: React.FC<Props> = ({ position, name, label }) => {
  switch (position) {
    case 'left':
      return <label htmlFor={name}>{label}</label>;
    case 'right':
      return <label htmlFor={name}>{label}</label>;
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
