/* eslint-disable @typescript-eslint/restrict-template-expressions */

/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */

//   function viewAllUpvotes(fields) {
//     fetch('/api/upvotes')
//       .then(showResponse)
//       .catch(showResponse);
//   }
  
  function viewUpvotesByAuthor(fields) {
    fetch(`/api/upvotes?author=${fields.author}`)
      .then(showResponse)
      .catch(showResponse);
  }

  function viewUpvotesByFreet(fields) {
    fetch(`/api/upvotes?freetId=${fields.id}`)
      .then(showResponse)
      .catch(showResponse);
  }
  
  function createUpvote(fields) {
    fetch(`/api/upvotes/${fields.id}`, {method: 'POST'})
      .then(showResponse)
      .catch(showResponse);
  }
  
  function deleteUpvote(fields) {
    fetch(`/api/upvotes/${fields.id}`, {method: 'DELETE'})
      .then(showResponse)
      .catch(showResponse);
  }
  