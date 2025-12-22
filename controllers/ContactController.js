import {sendContactEmail} from "../utils/mailer.js";

export const contact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // ✅ Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required",
      });
    }

    // ✅ Send email
    await sendContactEmail({
      name,
      email,
      message,
    });

    // ✅ Proper success response
    return res.status(200).json({
      success: true,
      message: "Contact message sent successfully",
    });

  } catch (error) {
    console.error("Contact API Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to send contact message",
    });
  }
};
