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

function create(req, res){
  Flight.create(req.body)
  .then(
    res.redirect('/flights')
  )
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function show(req, res){
  Flight.findById(req.params.id)
  .then(flight => {
    res.render('flights/show', {
      flight: flight,
      title: "Flight Details"
    })
  })
}

function deleteFlight(req, res){
  Flight.findByIdAndDelete(req.params.id)
  .then(flight => {
    res.redirect('/flights')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/flights')
  })
}

export {
  index,
  newFlight as new,
  create,
  show,
  deleteFlight as delete
}