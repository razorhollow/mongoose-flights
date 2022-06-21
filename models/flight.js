import mongoose from "mongoose"

const Schema = mongoose.Schema
const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['Southwest', 'American', 'United']
  },
  airport: {
    type: String,
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"]
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999
  },
    departs: Date
})

const Flight = mongoose.model('Flight', 
flightSchema)

export { Flight }