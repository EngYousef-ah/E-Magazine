document.addEventListener("DOMContentLoaded", () => {
    const articles = [
        {
            id: "tech",
            category: "Technology",
            title: "The Future of AI",
            content: "Artificial intelligence is reshaping industries, from healthcare to transportation.",
            image: "https://source.unsplash.com/400x300/?technology",
        },
        {
            id: "health",
            category: "Health",
            title: "Mental Health Awareness",
            content: "Learn the importance of mental well-being and steps to maintain it.",
            image: "https://source.unsplash.com/400x300/?health",
        },
        {
            id: "culture",
            category: "Culture",
            title: "Cultural Festivals Around the World",
            content: "Dive into the beauty of diverse cultural celebrations globally.",
            image: "https://source.unsplash.com/400x300/?culture",
        },
        {
            id: "sports",
            category: "Sports",
            title: "Top Athletes of 2024",
            content: "A look at the most successful athletes dominating their sports this year.",
            image: "https://source.unsplash.com/400x300/?sports",
        },
    ];

    const container = document.getElementById("articles-container");

    articles.forEach((article) => {
        container.innerHTML += `
        <div class="col-md-6 col-lg-4">
          <div class="card">
            <img src="${article.image}" class="card-img-top" alt="${article.category}">
            <div class="card-body">
              <h5 class="card-title">${article.title}</h5>
              <p class="card-text">${article.content}</p>
            </div>
          </div>
        </div>
      `;
    });
});
