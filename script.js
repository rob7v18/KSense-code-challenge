fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let users = data
      .map((values) => {
        return `<tr><td id=${values.id} onclick="fetchPosts(id)">${values.name}</td></tr>`;
      })
      .join("");
    document.getElementById("user_table_body").innerHTML = users;
  });

function fetchPosts(id) {
  document.getElementById("posts_table_title").innerHTML = `
    <th class="bg-light"><h3>Posts By Selected User</h3></th>`;
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let posts = data
        .map((values) => {
          if (values.userId == id) {
            return `<tr><td>${values.title}</td></tr>`;
          }
        })
        .join("");
      document.getElementById("posts_table_body").innerHTML = posts;
    });
}
