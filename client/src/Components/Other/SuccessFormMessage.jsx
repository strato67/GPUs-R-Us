export default function SuccessFormMessage({ message }) {
  return (
    <>
      <label className="label">
        <span></span>
        <span
          className={`label-text text-success`}
        >
          {message}
        </span>
      </label>
    </>
  );
}
