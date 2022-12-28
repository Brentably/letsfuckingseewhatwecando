// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import TikAPI from 'tikapi';

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const api = TikAPI(process.env.NEXT_SERVER_TIKAPI);
  (async function(){
    try{
        let response = await api.public.check({
            username: "nickrosenski" // secUID "MS4wLjABAAAAObSXkY9qaGCt-2GUIb7K5dq0ZfwWm88U5exBeBrWVFz0arfrkle7GypnbLwcBAgv"
        });
        res.status(200).json(response.json)
    }
    catch(err: any){
        console.log(err?.statusCode, err?.message, err?.json)
    }	
})();
  // res.status(200).json(response.json)
}
