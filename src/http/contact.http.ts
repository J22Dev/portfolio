import axios from "axios";
import { ContactModel } from "../models/contact.model";

export const sendContact = async (payload: ContactModel) => {
  const res = await axios.request({
    url: "https://formbold.com/s/3Gqzl",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: payload,
  });
  const { data, status } = res;
  return {
    data,
    status,
  };
};
