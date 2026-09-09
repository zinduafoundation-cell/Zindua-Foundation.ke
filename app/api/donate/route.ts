import { promises as fs } from "fs";
import { NextResponse } from "next/server";
import path from "path";

const dataDir = path.join(process.cwd(), "data");
const submissionsFile = path.join(dataDir, "donations.json");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, amount, supportArea, message, monthly, paymentMethod, consent, termsAccepted } = body ?? {};

    if (!fullName || !email || !phone || !amount || !supportArea || !paymentMethod) {
      return NextResponse.json({ error: "Please complete all required donation fields." }, { status: 400 });
    }

    if (consent !== true && termsAccepted !== true) {
      return NextResponse.json({ error: "You must accept the Terms & Conditions before making a donation." }, { status: 400 });
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
      type: "donation",
      fullName,
      email,
      phone,
      amount,
      supportArea,
      message: message || "",
      monthly: Boolean(monthly),
      paymentMethod,
      consent: true,
      createdAt: new Date().toISOString(),
    });

    await fs.writeFile(submissionsFile, JSON.stringify(submissions, null, 2), "utf8");

    return NextResponse.json({ success: true, message: "Donation submitted successfully." }, { status: 201 });
  } catch (error) {
    console.error("Donation submission failed:", error);
    return NextResponse.json({ error: "Donation submission failed." }, { status: 500 });
  }
}
