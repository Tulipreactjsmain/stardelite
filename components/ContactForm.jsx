import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import "@material/web/textfield/outlined-text-field.js";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = async (data) => {
    // console.log("dataa", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="mb-5 my-lg-0 my-md-0"
    >
      <div className="form-group position-relative d-flex flex-column">
        <md-outlined-text-field
          placeholder="John Doe ..."
          label="name"
          value="John Doe ..."
          name="name"
          id="name"
          type="name"
          {...register("name", { required: true })}
        ></md-outlined-text-field>
        {errors.title && <span className="text-danger">Name is required</span>}
      </div>
      <div className="form-group position-relative d-flex flex-column">
        <md-outlined-text-field
          placeholder="example@mailservice.com"
          label="e-mail"
          type="email"
          value="example@mailservice.com"
          name="email"
          id="email"
          {...register("email", { required: true })}
        ></md-outlined-text-field>
        {errors.title && <span className="text-danger">Email is required</span>}
      </div>
      <div className="form-group position-relative d-flex flex-column">
        <md-outlined-text-field
          placeholder="How can we help you ?"
          label="your message"
          value="How can we help you ?"
          name="message"
          id="message"
          type="textarea"
          rows="7"
          {...register("message", { required: true })}
        ></md-outlined-text-field>
        {errors.description && (
          <span className="text-danger">Description is required</span>
        )}
      </div>
      <div className="w-100">
        <div className="navBtnBorder position-relative ms-auto">
          <Button
            type="submit"
            className={`navBtn text-black`}
            style={{ fontSize: "0.85rem" }}
          >
            Get in touch
          </Button>
        </div>
      </div>
    </form>
  );
}
