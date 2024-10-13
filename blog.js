const blogPosts = [
    {
        title: "Understanding Section 66A",
        author: "Jane Doe",
        content: "Section 66A of the Information Technology Act, 2000 was struck down by the Supreme Court in 2015...",
        date: "2024-03-15"
    },
    {
        title: "Recent Trends in Cybercrime",
        author: "John Smith",
        content: "In recent years, we've seen a significant increase in cybercrime cases...",
        date: "2024-03-10"
    }
];

function displayBlogPosts() {
    const blogPostsContainer = document.getElementById('blog-posts');
    blogPostsContainer.innerHTML = '';

    blogPosts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p><strong>By ${post.author} on ${post.date}</strong></p>
            <p>${post.content}</p>
            <hr>
        `;
        blogPostsContainer.appendChild(postElement);
    });
}

document.getElementById('blog-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const newPost = {
        title: this.title.value,
        author: this.author.value,
        content: this.content.value,
        date: new Date().toISOString().split('T')[0]
    };
    blogPosts.unshift(newPost);
    displayBlogPosts();
    this.reset();
});

displayBlogPosts();