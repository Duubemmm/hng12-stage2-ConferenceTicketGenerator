import PropTypes from "prop-types";

const ProgressBar = ({ step }) => {
  return (
    <div className="flex justify-between mb-4">
      <div className={step >= 1 ? "text-blue-500" : "text-white"}>Step 1</div>
      <div className={step >= 2 ? "text-blue-500" : "text-white"}>Step 2</div>
      <div className={step >= 3 ? "text-blue-500" : "text-white"}>Step 3</div>
    </div>
  );
};

ProgressBar.propTypes = {
  step: PropTypes.number.isRequired,
};

export default ProgressBar;
