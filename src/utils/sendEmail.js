import nodemailer from "nodemailer";

const sendEmail = async (email, otp) => {
  try {

    const transporter = nodemailer.createTransport({

      service: "gmail",

      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASS,
      },

    });


    await transporter.sendMail({

      from: process.env.USER_EMAIL,

      to: email,

      subject: "Fruit App OTP",

      html: `
        <h2>Your OTP is ${otp}</h2>
        <p>This OTP is valid for 5 minutes.</p>
      `,

    });


    console.log("Email sent successfully");


  } catch (error) {

    console.log("Email Error:", error);

    throw error;

  }
};


export default sendEmail;