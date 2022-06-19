import { Flight } from '../models/flight.js'

function index(req, res){
  Flight.find({})
  .then(flights => {
    res.render("flights/index",{
      flights: flights,
      title: "Flights"
    })
  })
    .catch(error => {
      console.log(error)
      res.redirect('/')
    })
}

function newFlight(req, res){
  res.render("flights/new", {
    title: "Add Flight"
  })
}

export {
  index,
  newFlight as new,
}