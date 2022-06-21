import mongoose from "mongoose"

const Schema = mongoose.Schema
const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['Southwest', 'American', 'United'],
    required: true
  },
  airport: {
    type: String,
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
    required: true
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date,
    required: true
    }
})

const Flight = mongoose.model('Flight', 
flightSchema)

export { Flight }