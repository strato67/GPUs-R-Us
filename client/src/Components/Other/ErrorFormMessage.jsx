export default function ErrorFormMessage({ message }) {
  return (
    <>
      <label className="label">
        <span></span>
        <span
          className={`label-text text-error`}
        >
          {message}
        </span>
      </label>
    </>
  );
}
