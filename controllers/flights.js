import { Flight } from '../models/flight.js'
import { Meal } from '../models/meal.js'

function index(req, res){
  Flight.find({})
  .then(flights => {
    //check each flight.departs against today's date
    flights.forEach(flight => {
      const today = new Date
      if(flight.departs.toISOString() < today.toISOString()) {
        flight.color = "red"
      }
    })
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
  const newFlight = new Flight()
  const defaultDate = newFlight.departs
  const formattedDate = defaultDate.toISOString().slice(0,16)
  res.render("flights/new", {
    title: "Add Flight",
    departs: formattedDate
  })
}

function create(req, res){
  Flight.create(req.body)
  .then(flight => {
    res.redirect('/flights')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/flights')
  })
}

function show(req, res){
  Flight.findById(req.params.id)
  .populate('meals')
  .then(flight => {
    Meal.find({})
    .then(meals => {
      res.render('flights/show', {
        flight: flight,
        title: "Flight Details",
        meals
      })
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/flights')
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

function edit(req, res) {
  Flight.findById(req.params.id)
  .then(flight => {
    res.render('flights/edit', {
      title: "Edit Flight",
      flight: flight
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/flights')
  })
}

function update(req, res) {
  Flight.findByIdAndUpdate(req.params.id, req.body, { new: true})
  .then(flight => {
    res.redirect('/flights')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/flights')
  })
}

function createTicket(req, res) {
  Flight.findById(req.params.id)
  .then(flight => {
    flight.tickets.push(req.body)
    flight.save()
    .then(()=> {
      res.redirect(`/flights/${flight._id}`)
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/flights')
  })
}

function addMeal(req, res) {
  //find the flight
  Flight.findById(req.params.id)
  .then(flight => {
    //add the meal _id to the meals array
    console.log("This is the body: ",req.body)
    flight.meals.push(req.body.mealId)
    //save the flight
    flight.save()
    .then(()=> {
      //redirect back to the flight details show view
      res.redirect(`/flights/${flight._id}`)
    })
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
  deleteFlight as delete,
  edit,
  update,
  createTicket,
  addMeal
}