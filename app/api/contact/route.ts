import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Log the message to the server console (visible in Vercel logs)
    console.log("--- NEW CONTACT FORM SUBMISSION ---");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("------------------------------------");

    // In a real production environment, you would use a service like Resend here:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({ ... });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json({ error: "Failed to process message" }, { status: 500 });
  }
}
