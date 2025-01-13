import { useForm } from "react-hook-form";

function Talent() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  

  return (
    <>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div>
          <label>First Name: </label>
          <input
            {...register("firstName", { required: true })}
            aria-invalid={errors.firstName ? "true" : "false"}
          />
          {errors.firstName?.type === "required" && (
            <p role="alert">First name is required</p>
          )}
        </div>
        <br />
        <div>
          <label>Last Name: </label>
          <input {...register("lastname")} />
        </div>
        <br />
        <div>
          <label>Mobile: </label>
          <input {...register("mobile")} />
        </div>
        <br />
        <input type="submit" disabled = {isSubmitting} />
      </form>
    </>
  );
}

export default Talent;
