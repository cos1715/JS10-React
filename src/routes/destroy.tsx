import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({ params }: any) {
  if (Math.floor(Math.random() * 10) + 1 > 5) {
    throw new Error("oh dang!");
  }
  await deleteContact(params.contactId);
  return redirect("/");
}
