import { useNavigation } from "react-router-dom";

const FormButton = ({ text, bgColor }) => {
  const navigation = useNavigation();
  const submitting = navigation.state === "submitting";

  return (
    <div>
      <button
        type="submit"
        className={`btn w-full ${bgColor}`}
        disabled={submitting}
      >
        {submitting ? (
          <>
            <span className="loading loading-spinner loading-md"></span>
            sending...
          </>
        ) : (
          text
        )}
      </button>
    </div>
  );
};
export default FormButton;
