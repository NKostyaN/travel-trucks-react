const ErrorMessage = ({ err }) => {
  return (
    <div className="error">
      <h2>Something went wrong, sorry</h2>
      <p>
        <b>{err}</b>
      </p>
    </div>
  );
};

export default ErrorMessage;
