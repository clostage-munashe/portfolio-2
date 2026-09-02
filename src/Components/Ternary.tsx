const Puma = () => {
  const isMale = false;

  return <div>{isMale ? <h1>You are a male</h1> : <h1>You are a female</h1>}</div>;
};

const Buma = () => {
  return (
    <div>
      <Puma />
      <h1>Hello l am Buma</h1>
    </div>
  );
};

export default Buma;