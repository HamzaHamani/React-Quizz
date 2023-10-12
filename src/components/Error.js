function Error({ errorM }) {
  // console.log(errorM);
  return (
    <p className="error">
      <span>💥</span> {errorM}
    </p>
  );
}

export default Error;
