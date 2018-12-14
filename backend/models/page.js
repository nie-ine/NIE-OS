const mongoose = require('mongoose');

const pageSchema = mongoose.Schema({
    title: { type: String },
    description: { type: String },
    openApps: { type: [String] },
    appInputQueryMapping: { type: [String] },
    queries: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Query' }],
});

module.exports = mongoose.model('Page', pageSchema);
