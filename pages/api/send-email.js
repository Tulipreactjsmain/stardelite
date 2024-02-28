import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    const { ZOHO_EMAIL, ZOHO_PASSWORD } = process.env;
    let transporter = nodemailer.createTransport({
      host: "smtppro.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: ZOHO_EMAIL,
        pass: ZOHO_PASSWORD,
      },
    });

    try {
      await transporter.sendMail({
        from: `"Stardelite" hello@stardelitesolutions.com`,
        to: "hello@stardelitesolutions.com",
        subject: "New Contact Form Submission",
        html: `
          <p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Message: ${message}</p>
        `,
      });

      await transporter.sendMail({
        from: `"Stardelite" <hello@stardelitesolutions.com>`,
        to: email,
        subject: "Thank You for Contacting Us",
        html: `
          <p>Dear ${name},</p> 
          <p>Thank you for contacting us. We have received your message and will respond to you shortly.</p>
          <p>Best regards,<br/>Stardelite Team</p>
        `,
      });


      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Error sending email" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
