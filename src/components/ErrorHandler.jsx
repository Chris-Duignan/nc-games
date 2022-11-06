const ErrorHandler = ({ err }) => {
  return (
    <section className="error">
      <p>Status {err.status}</p>
      <p>{err.data.msg}</p>
    </section>
  );
};

export default ErrorHandler;
