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
  return res.text("<h1>Success </h1>");
}
