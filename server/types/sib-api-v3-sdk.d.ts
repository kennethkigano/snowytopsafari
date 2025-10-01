declare module 'sib-api-v3-sdk' {
  export const ApiClient: {
    instance: {
      authentications: {
        'api-key': {
          apiKey: string;
        };
      };
    };
  };
  
  export class TransactionalEmailsApi {
    sendTransacEmail(sendSmtpEmail: SendSmtpEmail): Promise<{ messageId: string }>;
  }
  
  export class SendSmtpEmail {
    sender: {
      email: string;
      name: string;
    };
    to: Array<{
      email: string;
      name: string;
    }>;
    subject: string;
    htmlContent?: string;
    textContent?: string;
  }
}