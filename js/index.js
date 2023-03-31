const form = document.querySelector('form');
const postContainer = document.querySelector('#post-container');
const URL = 'https://jsonplaceholder.typicode.com/posts/'

form.addEventListener('submit', event => {
  event.preventDefault();
  postContainer.innerHTML = '';
  const postId = document.querySelector('#postId').value;
  if (!validatePostId(postId)) {
    createErrorMessage('You must enter a number from 1 to 100.');
    return;
}

  fetchPost(`${URL}${postId}`, renderPost);
});

function fetchPost(url, onSuccess) {
  fetch(url)
    .then(res => {
      if (res.ok) {
        return res.json(); 
      } 
      throw {message: 'The post could not be found'};
    })
    .then(onSuccess)
    .catch((error) =>{
      console.error(error.message)
  });
}

function renderPost(post) {
  const postElement = document.createElement('div');
  postElement.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.body}</p>
  `;
  postContainer.appendChild(postElement);
  postElement.appendChild(createCommentsButton(post.id, postElement));
  postElement.appendChild(createCloseButton());
}

function createCommentsButton(postId, postElement) {
  const commentsButton = document.createElement('button');
  commentsButton.textContent = 'Find comments';
  commentsButton.addEventListener('click',  () => {
    commentsButton.disabled = true;
    fetchPost(`${URL}${postId}/comments`, (comments) => {
      const commentsElement = document.createElement('ul');
      comments.forEach(comment => {
        const commentItem = createCommentElement(comment);
        commentsElement.appendChild(commentItem);
      });
      postElement.appendChild(commentsElement);
    });
  });
  return commentsButton;
};

function createCommentElement(comment) {
  const commentItem = document.createElement('li');
  commentItem.innerHTML = `
    <h3>${comment.name}</h3>
    <p>${comment.body}</p>
  `;
  return commentItem;
}

function createCloseButton() {
  const closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.addEventListener('click', ()=>{
    postContainer.innerHTML = '';
  });
  return closeButton;
};

function validatePostId(postId) {
  const pattern = /^[1-9][0-9]?$|^100$/;
  return pattern.test(postId);
};

function createErrorMessage(message) {
  const errorMessage = document.createElement('p');
  errorMessage.textContent = message;
  postContainer.appendChild(errorMessage);
};



























// const form = document.querySelector('form');
// const postContainer = document.querySelector('#post-container');
// const URL = 'https://jsonplaceholder.typicode.com/posts/'

// form.addEventListener('submit', event => {
//   event.preventDefault();
//   postContainer.innerHTML = '';
//   const postId = document.querySelector('#postId').value;
//   if (!validatePostId(postId)) {
//     createErrorMessage('You must enter a number from 1 to 100.');
//     return;
//   }

//   fetch(`${URL}${postId}`)
//     .then(res => {
//       if (res.ok) {
//         return res.json(); 
//       } 
//       throw {massege: 'The post could not be found'};
//     })
//     .then(post => {
//       const postElement = document.createElement('div');
//       postElement.innerHTML = `
//         <h2>${post.title}</h2>
//         <p>${post.body}</p>
//       `;
//       postContainer.appendChild(postElement);
//       postElement.appendChild(createCommentsButton(postId, postElement));
//       postElement.appendChild(createCloseButton());
//     })
//     .catch(error => {
//       console.error(error.massege);
//       createElementForMiss()
//     })
// });

// function createCommentsButton(postId, postElement) {
//   const commentsButton = document.createElement('button');
//   commentsButton.textContent = 'Find comments';
//   commentsButton.addEventListener('click',  () => {
//     commentsButton.disabled = true;
//     fetch(`${URL}${postId}/comments`)
//       .then((res) => res.json())
//       .then(comments => {
//         const commentsElement = document.createElement('ul');
//         comments.forEach(comment => {
//           const commentItem = document.createElement('li');
//           commentItem.innerHTML = `
//             <h3>${comment.name}</h3>
//             <p>${comment.body}</p>
//           `;
//           commentsElement.appendChild(commentItem);
//         });
//         postElement.appendChild(commentsElement);
//       })
//       .catch(error => {
//         console.error(error);
//       })
//   });
//   return commentsButton;
// };

// function createCloseButton() {
//   const closeButton = document.createElement('button');
//   closeButton.textContent = 'Close';
//   closeButton.addEventListener('click', ()=>{
//     postContainer.innerHTML = '';
//   });
//   return closeButton;
// };

// function validatePostId(postId) {
//   const pattern = /^[1-9][0-9]?$|^100$/;
//   return pattern.test(postId);
// };

// function createErrorMessage(message) {
//   const errorMessage = document.createElement('p');
//   errorMessage.textContent = message;
//   postContainer.appendChild(errorMessage);
// };




// form.addEventListener('submit', event => {
//   event.preventDefault();
//   postContainer.innerHTML = '';
//   const postId = document.querySelector('#postId').value;
//   if (!postId) return;

//   fetch(`${URL}${postId}`)
//     .then(res => {
//       if (res.ok) {
//         return res.json(); 
//       } 
//       throw {massege: 'The post could not be found'};
//     })
//     .then(post => {
//       const postElement = document.createElement('div');
//       postElement.innerHTML = `
//         <h2>${post.title}</h2>
//         <p>${post.body}</p>
//       `;
//       postContainer.appendChild(postElement);
//       const commentsButton = document.createElement('button');
//       commentsButton.textContent = 'Find comments';
//       const closeButton = document.createElement('button');
//       closeButton.textContent = 'Close';
//       closeButton.addEventListener('click', ()=>{
//         postContainer.innerHTML = '';
//       })
//       commentsButton.addEventListener('click',  () => {
//         commentsButton.disabled = true;
//         fetch(`${URL}${postId}/comments`)
//           .then((res) => res.json())
//           .then(comments => {
//             const commentsElement = document.createElement('ul');
//             comments.forEach(comment => {
//               const commentItem = document.createElement('li');
//               commentItem.innerHTML = `
//                 <h3>${comment.name}</h3>
//                 <p>${comment.body}</p>
//               `;
//               commentsElement.appendChild(commentItem);
//             });
//             postElement.appendChild(commentsElement);
//           })
//           .catch(error => {
//             console.error(error);
//           })});
//       postElement.appendChild(commentsButton);
//       postElement.appendChild(closeButton);
//     })
//     .catch(error => {
//       console.error(error.massege);
//       createElementForMiss()
//   })
// });

// function createElementForMiss(){
//   const errorMass = document.createElement('p')
//   errorMass.innerText = 'You entered the wrong post number. Enter a number from 1 to 100.'
//   postContainer.appendChild(errorMass)  
// };



// const form = document.querySelector('form');
// const postContainer = document.querySelector('#post-container');
// const URL = 'https://jsonplaceholder.typicode.com/posts/'

// form.addEventListener('submit', event => {
//   event.preventDefault();
//   postContainer.innerHTML = '';
//   const postId = document.querySelector('#postId').value;
//   if (!validatePostId(postId)) {
//     createErrorMessage('You must enter a number from 1 to 100.');
//     return;
//   }

//   fetchPost(postId);
// });

// function fetchPost(postId) {
//   fetch(`${URL}${postId}`)
//     .then(handleResponse)
//     .then(renderPost)
//     .catch(handleError);
// }

// function handleResponse(res) {
//   if (res.ok) {
//     return res.json(); 
//   } 
//   throw {message: 'The post could not be found'};
// }

// function renderPost(post) {
//   const postElement = document.createElement('div');
//   postElement.innerHTML = `
//     <h2>${post.title}</h2>
//     <p>${post.body}</p>
//   `;
//   postContainer.appendChild(postElement);
//   postElement.appendChild(createCommentsButton(post.id, postElement));
//   postElement.appendChild(createCloseButton());
// }

// function handleError(error) {
//   console.error(error.message);
//   createElementForMiss();
// }

// function createCommentsButton(postId, postElement) {
//   const commentsButton = document.createElement('button');
//   commentsButton.textContent = 'Find comments';
//   commentsButton.addEventListener('click',  () => {
//     commentsButton.disabled = true;
//     fetch(`${URL}${postId}/comments`)
//       .then(res => res.json())
//       .then(renderComments)
//       .catch(handleError);
//   });
//   return commentsButton;
// };

// function renderComments(comments) {
//   const commentsElement = document.createElement('ul');
//   comments.forEach(comment => {
//     const commentItem = document.createElement('li');
//     commentItem.innerHTML = `
//       <h3>${comment.name}</h3>
//       <p>${comment.body}</p>
//     `;
//     commentsElement.appendChild(commentItem);
//   });
//   postContainer.querySelector('div').appendChild(commentsElement);
// }

// function createCloseButton() {
//   const closeButton = document.createElement('button');
//   closeButton.textContent = 'Close';
//   closeButton.addEventListener('click', ()=>{
//     postContainer.innerHTML = '';
//   });
//   return closeButton;
// };

// function validatePostId(postId) {
//   const pattern = /^[1-9][0-9]?$|^100$/;
//   return pattern.test(postId);
// };

// function createErrorMessage(message) {
//   const errorMessage = document.createElement('p');
//   errorMessage.textContent = message;
//   postContainer.appendChild(errorMessage);
// };

// function createElementForMiss() {
//   const errorMessage = document.createElement('p');
//   errorMessage.textContent = 'Something went wrong.';
//   postContainer.appendChild(errorMessage);
// };



