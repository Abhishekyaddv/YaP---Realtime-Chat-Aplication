export function createWelcomeEmailTemplate(name, clientURL) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to YAP !!</title>
    </head>
  <body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f7f9; color: #333333;">
    
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f4f7f9; padding: 40px 0;">
      <tr>
        <td align="center">
          
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 16px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); overflow: hidden; max-width: 600px; width: 100%;">
            
            <tr>
              <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 0; text-align: center;">
                <img src="https://img.freepik.com/free-vector/hand-drawn-message-element-vector-cute-sticker_53876-118344.jpg?t=st=1741295028~exp=1741298628~hmac=0d076f885d7095f0b5bc8d34136cd6d64749455f8cb5f29a924281bafc11b96c&w=1480" alt="Messenger Logo" style="width: 72px; height: 72px; border-radius: 50%; background-color: rgba(255, 255, 255, 0.2); padding: 8px; border: 2px solid rgba(255,255,255,0.4);">
                <h1 style="color: #ffffff; margin: 20px 0 0 0; font-size: 26px; font-weight: 700; letter-spacing: -0.5px;">Welcome to Messenger</h1>
              </td>
            </tr>

            <tr>
              <td style="padding: 40px 40px 20px 40px;">
                <p style="margin: 0 0 20px 0; font-size: 20px; color: #1a202c; font-weight: 600;">Hello ${name},</p>
                <p style="margin: 0 0 24px 0; font-size: 16px; line-height: 1.6; color: #4a5568;">
                  We are thrilled to have you! Messenger is your new hub for connecting with friends, family, and colleagues in real-time, anywhere in the world.
                </p>

                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f7fafc; border-radius: 12px; border: 1px solid #e2e8f0; margin-bottom: 30px;">
                  <tr>
                    <td style="padding: 24px;">
                      <p style="margin: 0 0 16px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #718096; font-weight: 700;">Get Started</p>
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td width="24" style="vertical-align: top; padding-bottom: 12px;">
                             <span style="color: #764ba2; font-size: 18px;">•</span>
                          </td>
                          <td style="padding-bottom: 12px; color: #4a5568; font-size: 15px;">Set up your profile picture</td>
                        </tr>
                        <tr>
                          <td width="24" style="vertical-align: top; padding-bottom: 12px;">
                             <span style="color: #764ba2; font-size: 18px;">•</span>
                          </td>
                          <td style="padding-bottom: 12px; color: #4a5568; font-size: 15px;">Find and add your contacts</td>
                        </tr>
                        <tr>
                          <td width="24" style="vertical-align: top; padding-bottom: 12px;">
                             <span style="color: #764ba2; font-size: 18px;">•</span>
                          </td>
                          <td style="padding-bottom: 12px; color: #4a5568; font-size: 15px;">Start your first conversation</td>
                        </tr>
                         <tr>
                          <td width="24" style="vertical-align: top;">
                             <span style="color: #764ba2; font-size: 18px;">•</span>
                          </td>
                          <td style="color: #4a5568; font-size: 15px;">Share photos, videos, and more</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <div style="text-align: center; margin-bottom: 30px;">
                  <a href="${clientURL}" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 16px 40px; border-radius: 50px; font-weight: 600; font-size: 16px; display: inline-block; box-shadow: 0 4px 15px rgba(118, 75, 162, 0.4);">
                    Open Messenger
                  </a>
                </div>

                <p style="margin: 0 0 5px 0; font-size: 15px; color: #4a5568;">Questions? We are here to help.</p>
                <p style="margin: 0; font-size: 15px; color: #4a5568;">Happy messaging!</p>
                
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                  <p style="margin: 0; font-size: 14px; color: #718096;">Best regards,<br><span style="color: #2d3748; font-weight: 600;">The Messenger Team</span></p>
                </div>
              </td>
            </tr>
            
            <tr>
              <td style="background-color: #f7fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
                <p style="margin: 0 0 10px 0; font-size: 12px; color: #a0aec0;">© 2025 Messenger. All rights reserved.</p>
                <p style="margin: 0; font-size: 12px;">
                  <a href="#" style="color: #764ba2; text-decoration: none; margin: 0 8px;">Privacy</a>
                  <span style="color: #cbd5e0;">|</span>
                  <a href="#" style="color: #764ba2; text-decoration: none; margin: 0 8px;">Terms</a>
                  <span style="color: #cbd5e0;">|</span>
                  <a href="#" style="color: #764ba2; text-decoration: none; margin: 0 8px;">Contact</a>
                </p>
              </td>
            </tr>
            
          </table>
          </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}