import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = async (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="my-5">
      <div className="form-group position-relative d-flex flex-column">
        <label className="form-label-top-left px-2" htmlFor="title">
          name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          {...register("name", { required: true })}
          className="form-input centered-placeholder"
          placeholder="John Doe ..."
        />
        {errors.title && <span className="text-danger">Email is required</span>}
      </div>
      <div className="form-group position-relative d-flex flex-column">
        <label className="form-label-top-left px-2" htmlFor="title">
          e-mail
        </label>
        <input
          type="text"
          id="title"
          name="title"
          {...register("title", { required: true })}
          className="form-input centered-placeholder"
          placeholder="example@mailservice.com"
        />
        {errors.title && <span className="text-danger">Email is required</span>}
      </div>
      <div className="form-group position-relative d-flex flex-column">
        <label className="form-label-top-left px-2" htmlFor="description">
          your message
        </label>
        <textarea
          id="description"
          name="description"
          {...register("description", { required: true })}
          className="form-input centered-placeholder w-100"
          style={{ height: "244px" }}
          placeholder="type your message here"
        ></textarea>
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
