/* eslint-disable react/prop-types */

const FormInput = ({ label, name, type, defaultValue }) => {
  return (
    <div className="form-control">
      <label htmlFor="" className="label label-text">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className="input input-bordered"
      />
    </div>
  );
};
export default FormInput;
