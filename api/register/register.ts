import { sql } from '@vercel/postgres';
 
module.exports = async (req, res) => {
  const { firstname, lastname, email, additional } = req.body;
 
  try {
    if (!firstname || !email || !lastname || !additional) throw new Error('A required field is missing');
    await sql`INSERT INTO formdata (First_name, Last_name, Email, 	
Additional_info) VALUES (${firstname}, ${lastname}, ${email}, ${additional});`;
  } catch (error) {
    return res.json({ error }, { status: 500 });
  }
  return res.text("<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="stylesheet" href="assets/css/styles.css">
        <link href="https://fonts.cdnfonts.com/css/bruno-ace" rel="stylesheet">
    <style>
      body {
        background-color: #810065;
      }
        .center-screen {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            text-align: center;
            font-family: Bruno Ace;
        }
    </style>
</head>
<body>
    <div class="center-screen">
        <h1>Success, Stay tuned.</h1>
    </div>
</body>
</html>
");
}
