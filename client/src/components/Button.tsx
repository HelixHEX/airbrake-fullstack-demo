const Button = () => {

  const throwError = () => {
    throw new Error ('Random client error')
  }
  return (
    <>
      <button onClick={throwError}>Click me for an error</button>
    </>
  );
};

export default Button;
