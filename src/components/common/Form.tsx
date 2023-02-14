import React from "react";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField, { FormFieldProps } from "./FormField";

type FormProps = {
  onSubmit: (data: any) => void;
  schema: z.AnyZodObject | z.ZodEffects<z.AnyZodObject>;
  fields: FormFieldProps[];
};
const Form = ({ schema, onSubmit, fields }: FormProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });
  return (
    <form
      onSubmit={handleSubmit((data) => {
        reset();
        onSubmit(data);
      })}
      className="flex flex-col gap-4 items-center"
    >
      {fields.map((field) => {
        const { ref, ...rest } = register(field.name);
        return (
          <FormField
            error={errors[field.name as keyof typeof errors]?.message as string}
            {...field}
            key={field.name}
            {...rest}
            ref={ref}
          />
        );
      })}
      <button
        type="submit"
        className="text-gray-200 bg-blue-600 hover:bg-blue-800 active:bg-blue-900 rounded-sm px-4 py-2"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
