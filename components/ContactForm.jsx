import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import "@material/web/textfield/outlined-text-field.js";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { Bars } from "react-loader-spinner";
import ReactDOMServer from "react-dom/server";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmitHandler = async (data) => {
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
        className="mb-5 my-lg-0 my-md-0 text-dark-custom"
      >
        <div className="form-group d-flex flex-column">
          <div className="input-container position-relative">
            <div className="absolute-lablel-input">
              <div></div>
              <div className="position-relative">
                <label
                  className="position-relative top-0 mx-1"
                  htmlFor="name"
                  style={{ transform: "translateY(-50%)" }}
                >
                  name
                </label>
              </div>
              <div></div>
            </div>
            <input
              className="position-absolute"
              placeholder="John Doe ..."
              label="name"
              name="name"
              id="name"
              type="name"
              {...register("name", { required: true })}
            />
          </div>
          {errors.name && (
            <span className="text-danger" style={{ fontSize: "14px" }}>
              Name is required
            </span>
          )}
        </div>
        <div className="form-group d-flex flex-column">
          <div className="input-container position-relative">
            <div className="absolute-lablel-input">
              <div></div>
              <div className="position-relative">
                <label
                  className="position-relative top-0 mx-1"
                  htmlFor="name"
                  style={{ transform: "translateY(-50%)" }}
                >
                  e-mail
                </label>
              </div>
              <div></div>
            </div>
            <input
              className="position-absolute"
              placeholder="example@gmail.com"
              label="name"
              name="email"
              id="email"
              type="email"
              {...register("email", { required: true })}
            />
          </div>
          {errors.email && (
            <span className="text-danger" style={{ fontSize: "14px" }}>
              Email is required
            </span>
          )}
        </div>
        <div className="form-group d-flex flex-column gap-2">
          <div className="input-container position-relative">
            <div className="absolute-lablel-textarea">
              <div></div>
              <div className="position-relative">
                <label
                  className="position-relative top-0 mx-1"
                  htmlFor="name"
                  style={{ transform: "translateY(-50%)" }}
                >
                  message
                </label>
              </div>
              <div></div>
            </div>
            <textarea
              className="position-absolute"
              placeholder="How can we help you ?"
              label="your message"
              name="message"
              id="message"
              type="textarea"
              {...register("message", { required: true })}
            ></textarea>
          </div>
          {errors.message && (
            <span className="text-danger" style={{ fontSize: "14px" }}>
              Description is required
            </span>
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
