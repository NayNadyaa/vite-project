import React from "react";
import { useForm } from "react-hook-form";

export default function ValidationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm(); // use form react hook

  const onSubmit = (data) => {
    console.log(data);
    alert("Form submitted successfully!"); // show alert after successfully submit
  };

  const password = watch("password");

  return (
    <div className="max-w-md p-4 border rounded shadow mb-4">
      <h2 className="text-xl font-bold mb-4">Task 2: Form Handling and Validation</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

        <div>
          <label className="block font-medium">Username:</label>
          <input
            className="w-full p-2 border rounded"
            type="text"
            {...register("username", { // regis field name in form with rules
              required: "Username is required",
            })}
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Email:</label>
          <input
            className="w-full p-2 border rounded"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // regex pattern for email
                message: "Email should be a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Password:</label>
          <input
            className="w-full p-2 border rounded"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password should be at least 8 characters long",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Confirm Password:</label>
          <input
            className="w-full p-2 border rounded"
            type="password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (val) =>
                val === password || "Confirm Password should match the Password field",
            })}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="px-4 py-2 rounded text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
