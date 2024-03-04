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
        <!DOCTYPE html>
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  lang="en"
>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
      rel="stylesheet"
    />
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charset="UTF-8" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="x-apple-disable-message-reformatting" content="" />
    <meta content="target-densitydpi=device-dpi" name="viewport" />
    <meta content="true" name="HandheldFriendly" />
    <meta
      name="format-detection"
      content="telephone=no, date=no, address=no, email=no, url=no"
    />
    <title>Meeting Invitation</title>
  </head>
  <body
    style="
      margin: 0;
      padding: 0;
      font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      color: #525252;
    "
  >
    <table
      role="presentation"
      width="100%"
      height="100%"
      border="0"
      cellspacing="0"
      cellpadding="0"
    >
      <tr>
        <td bgcolor="#f4f4f4" style="padding: 70px 0 30px 0">
          <table
            align="center"
            width="600"
            border="0"
            cellpadding="0"
            cellspacing="0"
            style="border-collapse: collapse"
          >
            <tr>
              <td bgcolor="#fcfcfc" style="padding: 20px 30px;">
              <p>Dear ${name},</p> 
              <p>Thank you for contacting us. We have received your message and will respond to you shortly.</p>
              <p>Best regards,<br/>Stardelite Team</p>
              </td>
            </tr>
            <tr>
              <td
                align="center"
                bgcolor="#f4f4f4"
                style="padding: 25px 0; width: 100%"
              >
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tr>
                    <td align="left"  style="width: fit-content; display: flex; margin-right: auto;">
                      <a
                        href="https://www.stardelitesolutions.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                        style="width: fit-content; display: flex;"
                        ><img
                          src="https://res.cloudinary.com/techbro/image/upload/v1709503291/Vector_ygee9x.png"
                          alt="Company Logo"
                          style="display: block; max-width: 130px"
                      /></a>
                    </td>
                    <td align="right">
                      <a
                        href="https://www.linkedin.com/company/stardelite/"
                        rel="noopener noreferrer"
                        target="_blank"
                        ><img
                          width="30"
                          height="30"
                          src="https://img.icons8.com/ios-filled/50/linkedin.png"
                          alt="linkedin"
                      /></a>
                      <a
                        href="https://instagram.com/stardelitesolutions"
                        rel="noopener noreferrer"
                        target="_blank"
                        ><img
                          width="30"
                          height="30"
                          src="https://img.icons8.com/ios-filled/50/instagram-new--v1.png"
                          alt="instagram-new--v1"
                      /></a>
                      <a
                        href="https://twitter.com/stardeliteLtd"
                        rel="noopener noreferrer"
                        target="_blank"
                        ><img
                          width="30"
                          height="30"
                          src="https://img.icons8.com/ios-filled/50/twitterx--v2.png"
                          alt="twitterx--v2"
                      /></a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td bgcolor="#f4f4f4" style="padding: 0px 0">
          <table
            align="center"
            width="600"
            border="0"
            cellspacing="0"
            cellpadding="0"
            style="border-collapse: collapse"
          >
            <tr>
              <td style="font-size: 14px; text-align: center; color: #9a9a9a;">
                <p style="margin: 6px">
                  Made by  <strong style="color: #1b4eb4">Stardelite LTD</strong>
                </p>
                <p style="margin: 6px">
                  You can contact us at
                  <a
                    href="mailto:hello@stardelitesolutions.com"
                    style="color: #ae8c02; text-decoration: none"
                    >hello@stardelitesolutions.com</a
                  >.
                </p>
                <p style="margin: 6px">© 2024 Stardelite. All rights reserved.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
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
