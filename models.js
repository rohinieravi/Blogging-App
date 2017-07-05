const mongoose = require('mongoose');

// this is our schema to represent a restaurant
const blogSchema = mongoose.Schema({
  title: {type: String, required: true},
  content: {type: String, required: true},
  author: {
    firstName: String,
    lastName: String
  }
});


blogSchema.virtual('authorName').get(function() {
  return `${this.author.firstName} ${this.author.lastName}`.trim()});

blogSchema.methods.apiRep = function() {

  return {
    id: this._id,
    title: this.title,
    content: this.content,
    author: this.authorName,
  };
}

// note that all instance methods and virtual properties on our
// schema must be defined *before* we make the call to `.model`.
const Blog = mongoose.model('Blog', blogSchema);

module.exports = {Blog};
