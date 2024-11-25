
"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: { name: any; email: any; message: any; }) => {
  await resend.emails.send({
    to: formData.email,
    from: "onboarding@resend.dev",
    subject: `Message from ${formData.name}`,
    html: `<p>${formData.message}</p>`,
  });
};
