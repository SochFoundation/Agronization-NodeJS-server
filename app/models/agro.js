var mongoose     = require('mongoose');

var Schema       = mongoose.Schema;

var AgroSchema   = new Schema({
    org_name: {
    	type: String,
    	required: true,
    },
    org_desc: {
        type: String,
        required: true,
    },
    org_type: {
    	type: String,
    	required: true,
    },
    org_location: {
        type: String,
        required: true,
    },
    org_phone_number: String,
    org_email: String,
    org_website: String,
    org_location_lat: String,
    org_location_lan: String,
    org_image: String,

});
//AgroSchema.index({ name: 'text', desc: 'text', type: 'text', location: "text" });

module.exports = mongoose.model('Agro', AgroSchema);
