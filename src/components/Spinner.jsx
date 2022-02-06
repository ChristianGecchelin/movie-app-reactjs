import { CgSpinner } from "react-icons/cg";
import "../styles/Spinner.scss";
const Spinner = () => {
  return (
    <div className="spinner-container">
      <CgSpinner className="spinner" />
    </div>
  );
};

export { Spinner };
