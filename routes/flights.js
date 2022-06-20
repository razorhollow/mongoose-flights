import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

//GET --localhost:3000/flights
router.get('/', flightsCtrl.index)

//GET --localhost:3000/new
router.get('/new', flightsCtrl.new)

//post --localhost:3000/flights
router.post('/', flightsCtrl.create)


export {
  router
}
