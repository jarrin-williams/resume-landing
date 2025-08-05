// animated hero text
document.addEventListener("DOMContentLoaded", () => {
    new Typed(".typed-text", {
        strings: [
            "Creative Coder",
            "Problem Solver",
        ],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        backDelay: 1500
    });
});
//flip skill cards on click
const skillCards = document.querySelectorAll('.skill-card')

skillCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('clicked');
    });
});
// Fetch GitHub projects and display them

  document.addEventListener('DOMContentLoaded', () => {
    const username = 'jarrinwilliams'; // ✅ Your actual GitHub username
    const container = document.getElementById('project-container');

    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then(repos => {
        console.log('API response:', repos); // Debug line

        if (!Array.isArray(repos)) {
          container.innerHTML = '⚠️ Error loading GitHub projects.';
          console.error('Unexpected response:', repos);
          return;
        }

        repos.forEach(repo => {
          const card = document.createElement('div');
          card.className = 'project-card';

          const title = document.createElement('h3');
          title.textContent = repo.name;

          const description = document.createElement('p');
          description.textContent = repo.description || 'No description provided.';

          const link = document.createElement('a');
          link.href = repo.html_url;
          link.target = '_blank';
          link.textContent = 'View on GitHub';

          card.appendChild(title);
          card.appendChild(description);
          card.appendChild(link);

          container.appendChild(card);
        });
      })
      .catch(error => {
        console.error('Error fetching repos:', error);
        container.textContent = '❌ Failed to load GitHub projects.';
      });
  });

