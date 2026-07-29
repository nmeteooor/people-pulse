"use server";

import { SurveyStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma/client";

function optionalDate(value: FormDataEntryValue | null): Date | null {
  if (typeof value !== "string" || value.trim() === "") return null;

  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

export async function createSurvey(formData: FormData) {
  const titleValue = formData.get("title");
  const descriptionValue = formData.get("description");
  const statusValue = formData.get("status");

  const title = typeof titleValue === "string" ? titleValue.trim() : "";
  const description =
    typeof descriptionValue === "string" && descriptionValue.trim()
      ? descriptionValue.trim()
      : null;

  if (title.length < 3) {
    throw new Error("Survey title must contain at least 3 characters.");
  }

  const allowedStatuses = new Set(Object.values(SurveyStatus));
  const status =
    typeof statusValue === "string" && allowedStatuses.has(statusValue as SurveyStatus)
      ? (statusValue as SurveyStatus)
      : SurveyStatus.DRAFT;

  const startsAt = optionalDate(formData.get("startsAt"));
  const endsAt = optionalDate(formData.get("endsAt"));

  if (startsAt && endsAt && endsAt <= startsAt) {
    throw new Error("End date must be later than start date.");
  }

  await prisma.survey.create({
    data: {
      title,
      description,
      status,
      startsAt,
      endsAt,
    },
  });

  revalidatePath("/surveys");
  redirect("/surveys");
}
