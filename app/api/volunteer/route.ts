import { promises as fs } from "fs";
import { NextResponse } from "next/server";
import path from "path";

const dataDir = path.join(process.cwd(), "data");
const submissionsFile = path.join(dataDir, "volunteers.json");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const normalized = {
      fullName: body?.fullName ?? body?.name,
      email: body?.email,
      phone: body?.phone,
      location: body?.location ?? body?.city ?? body?.area,
      interests: body?.interests ?? body?.interestArea ?? body?.focusArea,
      availability: body?.availability ?? body?.schedule,
      experience: body?.experience ?? body?.background ?? "",
      motivation: body?.motivation ?? body?.whyVolunteer ?? "",
      consent: body?.consent ?? body?.agree ?? false,
    };

    const { fullName, email, phone, location, interests, availability, experience, motivation, consent } = normalized;

    if (!fullName || !email || !phone || !location || !interests || !availability || !motivation) {
      return NextResponse.json({ error: "Please complete all required volunteer information." }, { status: 400 });
    }

    if (consent !== true) {
      return NextResponse.json({ error: "You must confirm that you agree to the volunteer terms." }, { status: 400 });
    }

    await fs.mkdir(dataDir, { recursive: true });

    let submissions: unknown[] = [];
    try {
      const raw = await fs.readFile(submissionsFile, "utf8");
      submissions = raw ? JSON.parse(raw) : [];
    } catch {
      submissions = [];
    }

    submissions.push({
      type: "volunteer",
      fullName,
      email,
      phone,
      location,
      interests,
      availability,
      experience: experience || "",
      motivation,
      consent: true,
      createdAt: new Date().toISOString(),
    });

    await fs.writeFile(submissionsFile, JSON.stringify(submissions, null, 2), "utf8");

    return NextResponse.json({ success: true, message: "Volunteer application submitted successfully." }, { status: 201 });
  } catch (error) {
    console.error("Volunteer submission failed:", error);
    return NextResponse.json({ error: "Volunteer submission failed." }, { status: 500 });
  }
}
