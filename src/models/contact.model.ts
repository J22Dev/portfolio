import z from "zod";
import { FormFieldProps } from "../components/common/FormField";

export const contactModel = z.object({
  firstName: z
    .string()
    .min(2, "First Name must be at least 2 characters.")
    .max(20, "First Name cannot exceed 20 characters."),
  lastName: z
    .string()
    .min(2, "Last Name must be at least 2 characters.")
    .max(20, "Last Name cannot exceed 20 characters."),
  email: z
    .string()
    .email("Email must be valid.")
    .max(50, "Email cannot exceed 50 characters."),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters.")
    .max(200, "Message cannot exceed 200 characters."),
});

export type ContactModel = z.infer<typeof contactModel>;

export const contactFields: FormFieldProps[] = [
  {
    name: "firstName",
    label: "First Name",
    placeholder: "Enter First Name",
    type: "text",
  },
  {
    name: "lastName",
    label: "Last Name",
    placeholder: "Enter Last Name",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter Email",
    type: "email",
  },
  {
    name: "message",
    label: "Message",
    placeholder: "Enter Message",
    type: "textarea",
  },
];
