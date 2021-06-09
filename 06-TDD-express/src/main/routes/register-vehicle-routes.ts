import { Router } from 'express'

export default (router: Router): void => {
  
  router.post('/register-vehicle', (_req, res) => {
    return res.status(200).json({
      ok: true,
      message: 'route is Ready'
    })
  })
}