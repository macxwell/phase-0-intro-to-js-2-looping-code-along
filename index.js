// Code your solutions in this file
// index.js

document.addEventListener('DOMContentLoaded', function() {
    // Fetch data from db.json
    fetch('db.json')
      .then(response => response.json())
      .then(data => {
        // Assuming db.json has a "posts" array
        const postsContainer = document.getElementById('posts-container');
  
        // Iterate through posts and create HTML elements
        data.posts.forEach(post => {
          const postElement = document.createElement('div');
          postElement.classList.add('post');
          postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
          `;
          postsContainer.appendChild(postElement);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  