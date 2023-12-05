import { sql } from '@vercel/postgres';
 
module.exports = async (req, res) => {
  const { name, email } = req.body;
 
  try {
    if (!name || !email) throw new Error('Pet and owner names required');
    await sql`INSERT INTO Pets (Name, Owner) VALUES (${name}, ${email});`;
  } catch (error) {
    return res.json({ error }, { status: 500 });
  }
 
  const pets = await sql`SELECT * FROM Pets;`;
  return res.json({ pets }, { status: 200 });
}
