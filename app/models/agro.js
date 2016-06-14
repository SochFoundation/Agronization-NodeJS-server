var mongoose     = require('mongoose');

var Schema       = mongoose.Schema;

var AgroSchema   = new Schema({
    name: {
    	type: String,
    	required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    type: {
    	type: String,
    	required: true,
    },
    location: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String
    },
    email: {
        type: String
    },
    website: String,
    location_lat: String,
    location_lan: String,
    image: String,
    is_approved: {
        type: Boolean,
        default: false
    },
});
AgroSchema.index({ name: 'text', desc: 'text', type: 'text', location: "text" });

module.exports = mongoose.model('Agro', AgroSchema);