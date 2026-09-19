/**
 * Google Forms Integration Configuration
 * ========================================
 * HOW TO CONNECT YOUR OWN GOOGLE FORM:
 * 1. Create a Google Form with 4 or 5 fields:
 *    - Full Name (Short answer)
 *    - Email Address (Short answer)
 *    - Phone Number (Short answer, optional)
 *    - Subject (Short answer)
 *    - Message (Paragraph)
 * 
 * 2. Click the 3 dots menu (top right) -> "Get pre-filled link"
 * 3. Fill dummy data in each field and click "Get link" -> "Copy link"
 * 4. In the copied URL, find:
 *    - The Form ID: https://docs.google.com/forms/d/e/[FORM_ID]/viewform
 *    - The entry IDs: entry.123456789=...
 * 5. Replace the values below:
 *    - Change 'YOUR_GOOGLE_FORM_ID' to your actual Form ID.
 *    - Replace entry IDs with your form's respective entry.XXXXXXX numbers.
 */

export const GOOGLE_FORM_CONFIG = {
  // Set to true once you have configured your real Google Form ID and entry IDs
  isEnabled: false,

  // Replace with your Google Form action URL:
  // e.g., "https://docs.google.com/forms/d/e/1FAIpQLSc_XXXXX_sample_id/formResponse"
  formActionUrl: "https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/formResponse",

  // Mapping of form field keys to Google Form entry IDs
  entryIds: {
    name: "entry.2005620554",      // Replace with your Name field entry ID
    email: "entry.1045781291",     // Replace with your Email field entry ID
    phone: "entry.1166974658",     // Replace with your Phone field entry ID
    subject: "entry.1065046570",   // Replace with your Subject field entry ID
    message: "entry.839337160"     // Replace with your Message field entry ID
  }
};

/**
 * Submits form data safely to Google Forms.
 * Google Forms does not return standard CORS headers, so fetch with mode 'no-cors'
 * is used to submit the data asynchronously without throwing browser CORS security blocks.
 */
export async function submitToGoogleForm(formData) {
  if (!GOOGLE_FORM_CONFIG.isEnabled || GOOGLE_FORM_CONFIG.formActionUrl.includes("YOUR_GOOGLE_FORM_ID")) {
    // Graceful simulated delivery when placeholder is present
    // Simulates network latency of 700ms and returns success
    await new Promise((resolve) => setTimeout(resolve, 700));
    return {
      success: true,
      mode: "simulated",
      message: "Message recorded! (Connect your Google Form ID in src/config/googleForm.js to receive responses directly in Google Sheets)"
    };
  }

  const urlParams = new URLSearchParams();
  if (formData.name && GOOGLE_FORM_CONFIG.entryIds.name) {
    urlParams.append(GOOGLE_FORM_CONFIG.entryIds.name, formData.name);
  }
  if (formData.email && GOOGLE_FORM_CONFIG.entryIds.email) {
    urlParams.append(GOOGLE_FORM_CONFIG.entryIds.email, formData.email);
  }
  if (formData.phone && GOOGLE_FORM_CONFIG.entryIds.phone) {
    urlParams.append(GOOGLE_FORM_CONFIG.entryIds.phone, formData.phone);
  }
  if (formData.subject && GOOGLE_FORM_CONFIG.entryIds.subject) {
    urlParams.append(GOOGLE_FORM_CONFIG.entryIds.subject, formData.subject);
  }
  if (formData.message && GOOGLE_FORM_CONFIG.entryIds.message) {
    urlParams.append(GOOGLE_FORM_CONFIG.entryIds.message, formData.message);
  }

  try {
    await fetch(GOOGLE_FORM_CONFIG.formActionUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: urlParams.toString()
    });

    return {
      success: true,
      mode: "live",
      message: "Thank you! Your message has been submitted successfully."
    };
  } catch (error) {
    console.error("Google Form submission error:", error);
    throw new Error("Unable to submit directly to Google Form. Please try again or use direct email.");
  }
}
