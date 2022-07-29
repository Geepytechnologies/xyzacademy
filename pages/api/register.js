export default async function handler(req, res) {
    try{
       const data = await axios.post('https://localhost:5000/api/registercongress' , {param: req.body.param}, headers)
        res.status(200).json(data)
     } catch (error) {
        console.error(error)
        return res.status(error.status || 500).end(error.message)
      }
}