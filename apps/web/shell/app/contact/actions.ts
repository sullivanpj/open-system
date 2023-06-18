"use server";

import { revalidateTag } from "next/cache";

export async function handleSubmit(formData: FormData) {
  console.log("Submit contact");

  revalidateTag("contact");
}
