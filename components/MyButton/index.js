export const MyButton = ({ name, ...rest }) => {
  const age = rest?.age;
  //   const name = props?.name;
  return (
    <div>
      MyButton - {name} - {age}
    </div>
  );
};
