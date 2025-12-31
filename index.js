// Get reference to the ul where posts will be displayed
const postList = document.getElementById("post-list");

// Function to display posts on the page
function displayPosts(posts) {
  postList.innerHTML = "";

  posts.forEach(post => {
    // Create elements
    const li = document.createElement("li");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    // Add content
    h1.textContent = post.title;
    p.textContent = post.body;

    // Append elements
    li.appendChild(h1);
    li.appendChild(p);
    postList.appendChild(li);
  });
}

// Async function to fetch posts
async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    // Call display function
    displayPosts(data);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

// Call the async fetch function
fetchPosts();
