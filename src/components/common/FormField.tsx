import React from "react";

export type FormFieldProps = {
  label: string;
  placeholder: string;
  value?: string;
  error?: string;
  name: string;
  type: "text" | "email" | "password" | "textarea";
};
const FormField = React.forwardRef(
  (
    { label, placeholder, value, error, name, type, ...rest }: FormFieldProps,
    ref: any
  ) => {
    return (
      <div className="w-full flex flex-col items-start">
        <label className="text-gray-400" htmlFor={name}>
          {label}
        </label>
        {type === "textarea" ? (
          <textarea
            ref={ref}
            value={value}
            rows={4}
            className=" resize-none border-2 border-slate-600  focus:border-slate-700 duration-200  outline-none w-full bg-slate-900 indent-2 py-1 rounded-sm text-gray-200 placeholder:text-gray-600"
            name={name}
            placeholder={placeholder}
            {...rest}
          />
        ) : (
          <input
            value={value}
            className="border-2 border-slate-600  focus:border-slate-700 duration-200  outline-none w-full bg-slate-900 indent-2 py-1 rounded-sm text-gray-200 placeholder:text-gray-600"
            name={name}
            placeholder={placeholder}
            type={type}
            ref={ref}
            {...rest}
          />
        )}
        {error && (
          <span className="text-red-600 text-sm font-semibold tracking-wide">
            {error}
          </span>
        )}
      </div>
    );
  }
);

export default FormField;
