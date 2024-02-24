import { Form } from "react-router-dom";
import FormInput from "../components/forms/FormInput";
import SubmitBtn from "../components/forms/SubmitBtn";

const CheckOutForm = () => {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl capitalize">shipping information</h4>
      <FormInput label="first name" name="name" type="text"></FormInput>
      <FormInput label="address" name="address" type="text"></FormInput>
      <div className="mt-4">
        <SubmitBtn text="place your order" />
      </div>
    </Form>
  );
};
export default CheckOutForm;
