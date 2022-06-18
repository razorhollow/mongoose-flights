import mongoose from "mongoose"

const Schema = mongoose.Schema
const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['G', 'PG', 'PG-13', 'R']
  },
  airport: {
    type: String,
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"]
  },
  flightNo: Number,
  departs: Date
})