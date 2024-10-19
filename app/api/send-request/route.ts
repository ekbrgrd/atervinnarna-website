import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  city: string;
  pcode: string;
  street: string;
  plan: Plan;
}

enum Plan {
  Atervinningsstart = "Återvinningsstart",
  Miljomedveten = "Miljömedveten",
  GronLivsstil = "Grön livsstil",
}

const recieverEmails = process.env.MAIL_RECIEVERS?.split(",") || [];

export async function POST(request: NextRequest) {
  const { name, email, pcode, phone, city, street, plan } = (await request.json()) as FormValues;

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT ? parseInt(process.env.MAIL_PORT) : 587,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: '"Återvinnarna System" <noreply@atervinnarna.se>',
      to: recieverEmails,
      subject: "ÅTERVINNARNA UF: NY KUNDANMÄLAN",
      text: `
      En ny kund har anmält sig till Återvinnarna! 
      
      Här är deras uppgifter:

      Namn: ${name}
      E-post: ${email}
      Telefon: ${phone}
      Postort: ${city}
      Postnummer: ${pcode}
      Gatuadress: ${street}
      Abonnemangsplan: ${plan}

      Du kan copy/paste nedanstående rad i kunddatabasen vilket autoformaterar till en ny rad:

      ${name}, ${email}, ${phone},  ${street}, ${pcode}, ${city}, ${plan}, Nyanmäld - inväntar kontakt

      Kontrollera att ingen annan redan har registrerat kunden i databasen innan du lägger in den.

      FAN VA KUL MED NY KUND! TAGGA! 🎉🎉🎉

      Allt gott,
      Återvinnarna System🌱
      `,
    });
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
