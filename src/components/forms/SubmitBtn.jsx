import { useNavigation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SubmitBtn = ({ text }) => {
  const { state } = useNavigation();
  const isSubmitting = state === "submitting";
  return (
    <button
      type="submit"
      className="btn btn-primary btn-block"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <span className="loading loading-spinner">Sending...</span>
      ) : (
        text || "Submit"
      )}
    </button>
  );
};

export default SubmitBtn;
