import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import "@material/web/textfield/outlined-text-field.js";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { Bars } from "react-loader-spinner";
import ReactDOMServer from "react-dom/server";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  const defaultValues = {
    name: "John Doe",
    email: "example@mailservice.com",
    message: "How can we help you?",
  };

  const onSubmitHandler = async (data) => {
    const formChanged = Object.keys(data).some(
      (key) => data[key] !== initialValues[key]
    );
    if (!formChanged) {
      toast.error("Please update at least one field before submitting.");
      return;
    }
    try {
      setLoading(true);
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast("Message sent successfully");
        setTimeout(() => {
          setLoading(false);
        }, 2000);

        reset();
      } else {
        toast.error("Error sending email");
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      
    }
  };

  useEffect(() => {
    setInitialValues(getValues());
    if (loading) {
      const overlay = document.createElement("div");
      overlay.className = "overlay";
      overlay.innerHTML = ReactDOMServer.renderToString(
        <Bars
          height="80"
          width="80"
          color="#8099cc"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      );
      document.body.appendChild(overlay);

      return () => {
        document.body.removeChild(overlay);
      };
    }
  }, [loading]);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="mb-5 my-lg-0 my-md-0"
      >
        <div className="form-group position-relative d-flex flex-column">
          <md-outlined-text-field
            placeholder="John Doe ..."
            label="name"
            value={defaultValues.name}
            name="name"
            id="name"
            type="name"
            {...register("name", { required: true })}
          ></md-outlined-text-field>
          {errors.title && (
            <span className="text-danger">Name is required</span>
          )}
        </div>
        <div className="form-group position-relative d-flex flex-column">
          <md-outlined-text-field
            placeholder="example@mailservice.com"
            label="e-mail"
            type="email"
            value={defaultValues.email}
            name="email"
            id="email"
            {...register("email", { required: true })}
          ></md-outlined-text-field>
          {errors.title && (
            <span className="text-danger">Email is required</span>
          )}
        </div>
        <div className="form-group position-relative d-flex flex-column gap-2">
          <md-outlined-text-field
            placeholder="How can we help you ?"
            label="your message"
            value={defaultValues.message}
            name="message"
            id="message"
            type="textarea"
            rows="7"
            {...register("message", { required: true })}
          ></md-outlined-text-field>
          {/* <div>
            <span className="text-dark-custom" style={{fontSize:"0.8rem"}}>Drag and drop or browse to upload your file(s)</span>
          </div> */}
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
    </>
  );
}
