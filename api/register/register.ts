import { sql } from '@vercel/postgres';
 
module.exports = async (req, res) => {
  const { firstname, lastname, email, additional } = req.body;
 
  try {
    if (!firstname || !email || !lastname || !additional) throw new Error('A required field is missing');
    const result = await sql`INSERT INTO formdata (First_name, Last_name, Email, 	
Additional_info) VALUES (${firstname}, ${lastname}, ${email}, ${additional});`;
   return res.json({ 'success': true }, { status: 200 });
  } catch (error) {
    return res.json({ error }, { status: 500 });
  }
}
