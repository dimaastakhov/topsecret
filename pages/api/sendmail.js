import nodemailer from "nodemailer";

export default async function handler(req, res) {
  try {
    // allow gmail access from less secure apps
    // https://myaccount.google.com/lesssecureapps?pli=1&rapt=AEjHL4Mbw6rhw_5S1vlhKqRyMabuqkNX_Fyaw5eQB-ObthUYSBZczYHUrLQRQGBMMiPKiALd1Y-yXi--ZVcf4kHj6HEP_bwuOA
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "zetby4-sUfwyk-kajsen",
        pass: process.env.NEXT_PUBLIC_GOOGLE_PASS,
      },
    });

    const { name, email, text } = JSON.parse(req.body);

    const mailOptions = {
      from: email,
      to: "info@sovsekretno.tv",
      subject: `TopSecret Web Message from: ${name}`,
      text,
    };

    const sendMail = (options) =>
      new Promise((resolve, reject) =>
        transporter.sendMail(options, function (error, info) {
          if (error) {
            reject({ error, info });
          } else {
            resolve({ info, error });
          }
        })
      );

    const { error, info } = await sendMail(mailOptions);

    if (error) res.status(500).json({ error: e });
    res.status(200).json({ info });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
}
