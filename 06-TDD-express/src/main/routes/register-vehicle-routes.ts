import { Router } from 'express'

export default (router: Router): void => {
  
  router.post('/register-vehicle', (req, res) => {

    console.log(req.body)
    return res.status(200).json({
      ok: true,
      message: 'route is Ready'
    })
  })
}