const mongoose = require('mongoose');

const Company = require('../models/menu.model');

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  companyType: {
    type: String,
    enum: ['restaurant', 'shop'],
    required: true
  },
  location: {
    type: String,
    required: true
  },
  places: {
    type: String,
    required: true
  },
  schedule: {
    type: String,
    required: true
  },
  image: {
    type: Number,
    required: true,
    unique: true
  }
}, {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        ret.id = doc._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      }
    }
  });

companySchema.virtual('menu', {
  ref: Menu.modelName,
  localField: '_id',
  foreignField: 'company',
  options: { sort: { position: -1 } }
})

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
