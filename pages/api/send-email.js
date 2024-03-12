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
        <table
        style="
          width: 100%;
          margin: 0 auto;
          max-width: 750px;
          background: rgb(255, 255, 255);
          font-family: lucida grande, lucida sans, lucida sans unicode, arial,
            helvetica, verdana, sans-serif;
          background: rgb(255, 255, 255);
          line-height: 20px;
        "
        cellpadding="0"
      >
        <tbody>
          <tr>
            <td
              style="
                font-family: lucida grande, lucida sans, lucida sans unicode, arial,
                  helvetica, verdana, sans-serif;
                background: rgb(255, 255, 255);
              "
            >
              <table
                style="display: table; width: 100%"
                cellpadding="0"
                cellspacing="0"
              >
                <tbody>
                  <tr>
                    <td colspan="4">
                      <a
                        href="https://www.stardelitesolutions.com/"
                        target="_blank"
                        style="padding-bottom: 12px; display: block"
                        ><img
                          style="max-width: 100px"
                          src="https://res.cloudinary.com/techbro/image/upload/v1709986261/Group_2_tdomtz.png"
                      /></a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div
                style="
                  padding: 5% 7% 0px;
                  border: 1px solid rgb(243, 243, 243);
                  border-bottom: 0px solid rgb(255, 255, 255);
                  position: relative;
                "
              >
                <div
                  style="font-size: 13px; color: rgb(51, 51, 51); padding-top: 0px"
                  class="x_142031865mailContent"
                >
                  <p>Dear ${name},</p>
                  <p>
                    Thank you for contacting us. We have received your message and
                    will respond to you shortly.
                  </p>
                  <p></p>
                  <p></p>
                </div>
              </div>
              <div
                style="
                  font-size: 13px;
                  padding: 3% 7%;
                  border-bottom-width: 1px;
                  border-bottom-style: solid;
                  border-bottom-color: rgb(243, 243, 243);
                  border-left-width: 1px;
                  border-left-style: solid;
                  border-left-color: rgb(243, 243, 243);
                  border-right-width: 1px;
                  border-right-style: solid;
                  border-right-color: rgb(243, 243, 243);
                "
              >
                <font color="#444444">
                  Best regards, <br />
                  <b>Stardelite Team</b> <br />
                  <br />
                </font>
              </div>
      
              <!-- colored lines -->
              <table
                style="display: table; width: 100%"
                cellpadding="0"
                cellspacing="0"
              >
                <tbody>
                  <tr
                    style="
                      line-height: 10px;
                      border: 1px solid rgb(243, 243, 243);
                      border-bottom: 0px solid rgb(255, 255, 255);
                    "
                  >
                    <td style="background-color: #ffcc00; height: 2px; width: 25%">
                      <br />
                    </td>
      
                    <td
                      style="
                        background-color: rgb(200, 37, 56);
                        height: 2px;
                        width: 25%;
                      "
                    >
                      <br />
                    </td>
                    <td
                      style="
                        background-color: rgb(25, 153, 79);
                        height: 2px;
                        width: 25%;
                      "
                    >
                      <br />
                    </td>
                    <td style="background-color: #1b4eb4; height: 2px; width: 25%">
                      <br />
                    </td>
                  </tr>
                </tbody>
              </table>
      
              <!-- Social media -->
              <div style="background: rgb(248, 247, 247); padding: 1% 7%">
                <table style="width: 100%" cellpadding="0" cellspacing="0">
                  <tbody>
                    <tr>
                      <td style="text-align: left">
                        <a
                          style="
                            border: solid #808080 1px;
                            border-radius: 100%;
                            margin-right: 8px;
                            vertical-align: middle;
                            display: inline-table;
                            cursor: pointer;
                          "
                          href="https://instagram.com/stardelitesolutions"
                          target="_blank"
                        >
                          <img
                            style="height: 10px; width: 10px; margin: 4px"
                            src="https://img.icons8.com/ios-filled/50/808080/instagram-new--v1.png"
                            alt="instagram-new--v1"
                          />
                        </a>
                        <a
                          style="
                            border: solid #808080 1px;
                            border-radius: 100%;
                            margin-right: 8px;
                            vertical-align: middle;
                            display: inline-table;
                            cursor: pointer;
                          "
                          href="https://www.linkedin.com/company/stardelite/"
                          target="_blank"
                        >
                          <img
                            style="height: 10px; width: 10px; margin: 4px"
                            alt="linkedIn"
                            src="https://img.icons8.com/ios-glyphs/30/808080/linkedin-2--v1.png"
                          />
                        </a>
                        <a
                          style="
                            border: solid #808080 1px;
                            border-radius: 100%;
                            vertical-align: middle;
                            display: inline-table;
                            cursor: pointer;
                          "
                          href="https://twitter.com/stardeliteLtd"
                          target="_blank"
                        >
                          <img
                            style="height: 10px; width: 10px; margin: 4px"
                            src="https://img.icons8.com/ios-filled/50/808080/twitter.png"
                            alt="twitter"
                          />
                        </a>
                      </td>
                      <td style="text-align: right">
                        <a
                          style="
                            font-size: 13px;
                            color: rgb(51, 112, 187);
                            text-decoration: none;
                            cursor: pointer;
                          "
                          href="#"
                          target="_blank"
                        >
                          Terms
                        </a>
                        <span style="vertical-align: middle"> · </span>
                        <a
                          style="
                            font-size: 13px;
                            color: rgb(51, 112, 187);
                            text-decoration: none;
                            cursor: pointer;
                          "
                          href="#"
                          target="_blank"
                        >
                          Privacy
                        </a>
                        <span style="vertical-align: middle"> · </span>
                        <a
                          style="
                            font-size: 13px;
                            color: rgb(51, 112, 187);
                            text-decoration: none;
                            cursor: pointer;
                          "
                          href="#"
                          target="_blank"
                        >
                          Help
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
      
              <!-- Footer -->
      
              <table
                align="center"
                width="100%"
                border="0"
                cellspacing="0"
                cellpadding="0"
                style="border-collapse: collapse; margin-top: 40px"
              >
                <tr>
                  <td
                    style="
                      font-size: 12px;
                      font-weight: light;
                      text-align: center;
                      color: #9a9a9a;
                    "
                  >
                    <p style="margin: 10px">
                      Sent by
                      <span style="color: #1b4eb4">Stardelite limited</span>
                    </p>
                    <p style="margin: 10px">
                      You can contact us at
                      <a
                        href="mailto:hello@stardelitesolutions.com"
                        style="
                          color: #9a9a9a;
                          font-weight: bold;
                          text-decoration: none;
                        "
                        >hello@stardelitesolutions.com</a
                      >.
                    </p>
                    <p style="margin: 10px">
                      © 2024 Stardelite. All rights reserved.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      
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
