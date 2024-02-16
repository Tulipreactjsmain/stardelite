import { Layout, ContactUSLogo } from ".";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";

export default function CoreValues() {
  const width = 1440;
  const height = 748;
  const aspectRatio = width / height;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = async (data) => {};

  return (
    <Layout>
      <section
        className="contact d-flex justify-content-between flex-column"
        id="contact"
        style={{ paddingTop: "8.5rem", gap: "4rem" }}
      >
        <div className="text-dark-custom text-center">
          <p>get in touch</p>
          <h5
            className="fw-semibold"
            style={{
              color: "#8099CC",
              fontSize: "3.75rem",
              lineHeight: "72px",
            }}
          >
            CONTACT US
          </h5>
        </div> 
        <div
          className="w-100"
          style={{
            backgroundImage: "url('/contactUsImage.webp')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div
            className="layout-margin d-flex flex-column flex-lg-row flex-md-row gap-0 justify-content-between align-items-center px-5"
            style={{
              aspectRatio: aspectRatio.toFixed(2),
              backdropFilter: ` blur(6px)`,
              backgroundColor: "rgb(255, 255, 255, 0.7)",
              marginTop: "80px",
              marginBottom: "80px",
              borderRadius: "16px",
            }}
          >
            <div className="my-5 order-2 order-lg-0 order-md-0">
              <ContactUSLogo />
              <div></div>
            </div>

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
                  // style={{ height: "48px" }}
                  placeholder="John Doe ..."
                />
                {errors.title && (
                  <span className="text-danger">Email is required</span>
                )}
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
                  // style={{ height: "48px" }}
                  placeholder="example@mailservice.com"
                />
                {errors.title && (
                  <span className="text-danger">Email is required</span>
                )}
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
          </div>
        </div>
      </section>
    </Layout>
  );
}
