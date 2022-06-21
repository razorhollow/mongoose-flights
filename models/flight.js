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
    required: true,
    default: function() {
      return new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    }
    }
})

const Flight = mongoose.model('Flight', 
flightSchema)

export { Flight }