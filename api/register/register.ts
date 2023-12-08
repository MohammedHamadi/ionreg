import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
 var firstname = req.body.firstname;
  res.redirect(307, `/success.html`)
}
