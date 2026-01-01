const welcomeEmailTemplate = (name) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Welcome Email</title>
  <style>
    body {
      background-color: #f4f6f8;
      font-family: Arial, Helvetica, sans-serif;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: auto;
      background: #ffffff;
      padding: 20px;
      border-radius: 8px;
    }
    .header {
      text-align: center;
      color: #2c3e50;
    }
    .content {
      color: #333333;
      line-height: 1.6;
      font-size: 15px;
    }
    .footer {
      margin-top: 30px;
      font-size: 12px;
      color: #777777;
      text-align: center;
    }
    .btn {
      display: inline-block;
      margin-top: 20px;
      padding: 10px 20px;
      background-color: #4f46e5;
      color: #ffffff;
      text-decoration: none;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2 class="header">Welcome to CSI 🎉</h2>

    <div class="content">
      <p>Hello <strong>${name}</strong>,</p>

      <p>
        Thank you for signing up. Your account has been created successfully.
        We're excited to have you on board!
      </p>


      <p style="margin-top: 20px;">
        If you did not create this account, please ignore this email.
      </p>
    </div>

    <div class="footer">
      <p>© 2026 My App. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;



const loginAlertTemplate = (name, time) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Login Alert</title>
  <style>
    body {
      background-color: #f4f6f8;
      font-family: Arial, Helvetica, sans-serif;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: auto;
      background: #ffffff;
      padding: 20px;
      border-radius: 8px;
    }
    .header {
      text-align: center;
      color: #e11d48;
    }
    .content {
      color: #333;
      font-size: 15px;
      line-height: 1.6;
    }
    .footer {
      margin-top: 30px;
      font-size: 12px;
      color: #777;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2 class="header">New Login Detected 🔐</h2>

    <div class="content">
      <p>Hello <strong>${name}</strong>,</p>

      <p>
        We detected a new login to your account with the following details:
      </p>

      <ul>
        <li><strong>Time:</strong> ${time}</li>
     
      </ul>

      <p>
        If this was you, no action is required.
        If not, please reset your password immediately.
      </p>
    </div>

    <div class="footer">
      <p>© 2026 My App. Security Team</p>
    </div>
  </div>
</body>
</html>
`;



export {welcomeEmailTemplate , loginAlertTemplate};