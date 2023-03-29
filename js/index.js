const form = document.querySelector('form');
const postContainer = document.querySelector('#post-container');

form.addEventListener('submit', event => {
  event.preventDefault();
  postContainer.innerHTML = '';
  const postId = document.querySelector('#postId').value;
  if (!postId) return;

  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res => {
      if (res.ok) {
        return res.json(); 
      } 
      throw {massege: 'The post could not be found'};
    })
    .then(post => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      `;
      postContainer.appendChild(postElement);
      
      const commentsButton = document.createElement('button');
      commentsButton.textContent = 'Find comments';
      const closeButton = document.createElement('button');
      closeButton.textContent = 'Close';
      closeButton.addEventListener('click', ()=>{
        postContainer.innerHTML = '';
      })
      commentsButton.addEventListener('click',  () => {
        commentsButton.disabled = true;

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
          .then((res) => res.json())
          .then(comments => {
            const commentsElement = document.createElement('ul');
            comments.forEach(comment => {
              const commentItem = document.createElement('li');
              commentItem.innerHTML = `
                <h3>${comment.name}</h3>
                <p>${comment.body}</p>
              `;
              commentsElement.appendChild(commentItem);
            });
            postElement.appendChild(commentsElement);
          })
          .catch(error => {
            console.error(error);
          })});
      postElement.appendChild(commentsButton);
      postElement.appendChild(closeButton);
    })
    .catch(error => {
      console.error(error.massege);
      createElementForMiss()
  })
});

function createElementForMiss(){
  const errorMass = document.createElement('p')
  errorMass.innerText = 'You entered the wrong post number. Enter a number from 1 to 100.'
  postContainer.appendChild(errorMass)  
};


