const nodemailer = require('nodemailer')
exports.handler = async (event) => {
  let transporter = nodemailer.createTransport({
    host: "",
    port: 25,
    auth: {
      user: "",
      pass: "",

    },
  });

  let info = await transporter.sendMail({

    from: "no-reply",
    to: event.to,
    subject: event.subject,
    text: event.text

  })
  return { success: true, reason: "메일 보내기 성공" };
} catch (e) {
  logger.error(e);
  return { success: false, reason: "메일 보내기 실패" };
}

