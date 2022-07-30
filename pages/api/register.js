import axios from 'axios';


export default async function handler(req, res) {
    try{
       const data = await axios.post('https://xyzacademy.herokuapp.com/api' , {param: req.body.param});
        res.status(200).json(data)
     } catch (error) {
        console.error(error)
        return res.status(error.status || 500).end(error.message)
      }
}