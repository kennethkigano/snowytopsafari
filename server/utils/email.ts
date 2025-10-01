import { Resend } from 'resend';

/**
 * Email service using Resend API
 * Requires RESEND_API_KEY environment variable
 * Visit https://resend.com/docs/send-with-nodejs for setup instructions
 */

// Initialize Resend
let resend: Resend | null = null;

// Initialize the mail service if Resend API key is available
if (process.env.RESEND_API_KEY) {
  try {
    resend = new Resend(process.env.RESEND_API_KEY);
    console.log('Resend mail service initialized');
  } catch (error) {
    console.error('Failed to initialize Resend:', error);
  }
} else {
  console.log('RESEND_API_KEY not available, email functionality will be disabled');
}

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<{ success: boolean; message: string }> {
  if (!resend) {
    console.log('Email not sent: Resend mail service not initialized');
    return { 
      success: false, 
      message: 'Email service not configured. The message was not sent.' 
    };
  }

  try {
    // Prepare email options for Resend
    const emailOptions: any = {
      from: `SnowyTop Safaris <${params.from}>`,
      to: [params.to],
      subject: params.subject,
    };

    // Add content - Resend requires either html or text
    if (params.html) {
      emailOptions.html = params.html;
    }
    if (params.text) {
      emailOptions.text = params.text;
    }
    // If neither is provided, use a default text
    if (!params.html && !params.text) {
      emailOptions.text = params.subject;
    }

    // Send email using Resend
    const response = await resend.emails.send(emailOptions);
    
    console.log(`Email sent to ${params.to}, ID: ${response.data?.id}`);
    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Resend email error:', error);
    return { 
      success: false, 
      message: 'Failed to send email. Please try again later.' 
    };
  }
}

// Helper function for booking form submissions
export async function sendBookingEmail(formData: any): Promise<{ success: boolean; message: string }> {
  if (!resend) {
    return { 
      success: true, 
      message: 'Booking request received. Email service not configured yet, but your request has been recorded.' 
    };
  }

  // Map safari category ID to name
  const safariCategories = {
    1: "Luxury Safari",
    2: "Budget Safari", 
    3: "Wildlife & Conservation Safari",
    4: "Culture Safari"
  };
  
  const safariType = safariCategories[formData.itineraryId] || `Category ID: ${formData.itineraryId}`;
  const fullPhoneNumber = formData.phone ? `${formData.countryCode || ''} ${formData.phone}` : 'Not provided';
  const totalTravelers = (formData.numberOfAdults || 0) + (formData.numberOfKids || 0) + (formData.numberOfToddlers || 0);

  const subject = `New Safari Booking Request from ${formData.name}`;
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h2 style="color: #1a365d; margin-bottom: 20px; border-bottom: 3px solid #ed8936; padding-bottom: 10px;">
          New Safari Booking Request
        </h2>
        
        <div style="margin-bottom: 25px;">
          <h3 style="color: #2d3748; margin-bottom: 15px;">Contact Information</h3>
          <p style="margin: 8px 0;"><strong>Name:</strong> ${formData.name}</p>
          <p style="margin: 8px 0;"><strong>Email:</strong> ${formData.email}</p>
          <p style="margin: 8px 0;"><strong>Phone:</strong> ${fullPhoneNumber}</p>
        </div>

        <div style="margin-bottom: 25px;">
          <h3 style="color: #2d3748; margin-bottom: 15px;">Safari Details</h3>
          <p style="margin: 8px 0;"><strong>Safari Type:</strong> ${safariType}</p>
          <p style="margin: 8px 0;"><strong>Preferred Dates:</strong> ${formData.preferredDates || 'Not specified'}</p>
        </div>

        <div style="margin-bottom: 25px;">
          <h3 style="color: #2d3748; margin-bottom: 15px;">Group Information</h3>
          <p style="margin: 8px 0;"><strong>Total Travelers:</strong> ${totalTravelers}</p>
          <div style="margin-left: 20px;">
            <p style="margin: 5px 0;">• Adults: ${formData.numberOfAdults || 0}</p>
            <p style="margin: 5px 0;">• Kids (3-12): ${formData.numberOfKids || 0}</p>
            <p style="margin: 5px 0;">• Toddlers (0-2): ${formData.numberOfToddlers || 0}</p>
          </div>
        </div>

        ${formData.message ? `
        <div style="margin-bottom: 25px;">
          <h3 style="color: #2d3748; margin-bottom: 15px;">Additional Notes</h3>
          <p style="background-color: #f7fafc; padding: 15px; border-radius: 5px; border-left: 4px solid #ed8936;">
            ${formData.message}
          </p>
        </div>
        ` : ''}

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #718096; font-size: 14px;">
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          <p style="margin-top: 10px;">
            Please respond to this booking request within 24 hours. Contact the client at 
            <a href="mailto:${formData.email}" style="color: #ed8936;">${formData.email}</a>
            ${formData.phone ? ` or ${fullPhoneNumber}` : ''}.
          </p>
        </div>
      </div>
    </div>
  `;

  return sendEmail({
    to: 'reservations@snowytopsafari.com',
    from: 'noreply@snowytopsafaris.com',
    subject,
    html: htmlContent,
  });
}

// Helper function for volunteer applications
export async function sendVolunteerApplicationEmail(formData: any): Promise<{ success: boolean; message: string }> {
  if (!resend) {
    return { 
      success: true, 
      message: 'Volunteer application received. Email service not configured yet, but your application has been recorded.' 
    };
  }

  const htmlContent = `
    <h2>New Volunteer Application</h2>
    <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Phone:</strong> ${formData.phone}</p>
    <p><strong>Country:</strong> ${formData.country}</p>
    <p><strong>Duration:</strong> ${formData.duration}</p>
    <p><strong>Start Date:</strong> ${formData.startDate}</p>
    <p><strong>Areas of Interest:</strong> ${formData.areasOfInterest.join(', ')}</p>
    <p><strong>Skills:</strong> ${formData.skills}</p>
    <p><strong>Experience:</strong> ${formData.experience}</p>
    <p><strong>Motivation:</strong> ${formData.motivation}</p>
  `;

  return sendEmail({
    to: 'sales@snowytopsafari.com',
    from: 'website@snowytopsafari.com', // Update this with your verified sender
    subject: 'New Volunteer Application from SnowyTop Safaris Website',
    html: htmlContent,
  });
}

// Helper function for donations
export async function sendDonationEmail(formData: any): Promise<{ success: boolean; message: string }> {
  if (!resend) {
    return { 
      success: true, 
      message: 'Donation information received. Email service not configured yet, but your donation information has been recorded.' 
    };
  }

  const htmlContent = `
    <h2>New Donation Information</h2>
    <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Phone:</strong> ${formData.phone}</p>
    <p><strong>Amount:</strong> $${formData.amount}</p>
    <p><strong>Donation Type:</strong> ${formData.donationType}</p>
    <p><strong>Project:</strong> ${formData.project}</p>
    <p><strong>Message:</strong> ${formData.message ? formData.message : 'None'}</p>
  `;

  return sendEmail({
    to: 'sales@snowytopsafari.com',
    from: 'noreply@snowytopsafaris.com',
    subject: 'New Donation Information from SnowyTop Safaris Website',
    html: htmlContent,
  });
}

export async function sendDonationInquiryEmail(formData: any): Promise<{ success: boolean; message: string }> {
  if (!resend) {
    return { 
      success: true, 
      message: 'Donation inquiry received. Email service not configured yet, but your inquiry has been recorded.' 
    };
  }

  const subject = `New Donation Inquiry - ${formData.title}`;
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h2 style="color: #1a365d; margin-bottom: 20px; border-bottom: 3px solid #ed8936; padding-bottom: 10px;">
          New Donation Inquiry
        </h2>
        
        <div style="margin-bottom: 25px;">
          <h3 style="color: #2d3748; margin-bottom: 15px;">Contact Information</h3>
          <p style="margin: 8px 0;"><strong>Email:</strong> ${formData.email}</p>
        </div>

        <div style="margin-bottom: 25px;">
          <h3 style="color: #2d3748; margin-bottom: 15px;">Donation Details</h3>
          <p style="margin: 8px 0;"><strong>Interest Type:</strong> ${formData.title}</p>
          <p style="margin: 8px 0;"><strong>Donation Type:</strong> ${formData.donationType}</p>
        </div>

        ${formData.message ? `
        <div style="margin-bottom: 25px;">
          <h3 style="color: #2d3748; margin-bottom: 15px;">Message</h3>
          <p style="background-color: #f7fafc; padding: 15px; border-radius: 5px; border-left: 4px solid #ed8936;">
            ${formData.message}
          </p>
        </div>
        ` : ''}

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #718096; font-size: 14px;">
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          <p style="margin-top: 10px;">
            Please follow up with this donation inquiry by contacting 
            <a href="mailto:${formData.email}" style="color: #ed8936;">${formData.email}</a>
            to discuss donation options and next steps.
          </p>
        </div>
      </div>
    </div>
  `;

  return sendEmail({
    to: 'sales@snowytopsafari.com',
    from: 'noreply@snowytopsafaris.com',
    subject,
    html: htmlContent,
  });
}