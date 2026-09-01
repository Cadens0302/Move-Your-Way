const activities = [
  {
    name: "Morning Stretch Flow",
    description: "Wake up slowly with easy reaches, ankle rolls, and shoulder loosening.",
    category: "calm",
    icon: "🧘",
    accent: "#ffcf99"
  },
  {
    name: "Bedroom Yoga",
    description: "Try a few simple poses between homework and your next playlist.",
    category: "calm",
    icon: "🌤️",
    accent: "#bde8d6"
  },
  {
    name: "Breathing Reset",
    description: "Use guided breathing to settle your brain and relax your body.",
    category: "calm",
    icon: "🌬️",
    accent: "#c5dbff"
  },
  {
    name: "Meditation Minute",
    description: "Sit, breathe, and let your brain cool off for a few quiet minutes.",
    category: "calm",
    icon: "🫧",
    accent: "#cfd8ff"
  },
  {
    name: "Music Walk",
    description: "Put on your favorite songs and walk without worrying about pace.",
    category: "outdoor",
    icon: "🎧",
    accent: "#ffc0a6"
  },
  {
    name: "Photo Walk",
    description: "Take pictures of clouds, shoes, street art, or whatever catches your eye.",
    category: "outdoor",
    icon: "📸",
    accent: "#ffe29a"
  },
  {
    name: "Sunset Stroll",
    description: "Go out when the day feels softer and take an easy neighborhood lap.",
    category: "outdoor",
    icon: "🌇",
    accent: "#ffb8a3"
  },
  {
    name: "Pet Walk",
    description: "Walk your dog or tag along with a friend and their pet.",
    category: "social",
    icon: "🐾",
    accent: "#b8efd8"
  },
  {
    name: "Dance Break",
    description: "Move around your room to one song and call it a win.",
    category: "creative",
    icon: "💿",
    accent: "#ffb7d6"
  },
  {
    name: "Mirror Choreo",
    description: "Make up your own routine with no rules and no audience needed.",
    category: "creative",
    icon: "🪩",
    accent: "#d0c2ff"
  },
  {
    name: "TikTok Practice",
    description: "Learn a few steps just for fun and replay them until they click.",
    category: "creative",
    icon: "📱",
    accent: "#ffc6a5"
  },
  {
    name: "Balance Challenge",
    description: "Test your balance while brushing your teeth or waiting for a snack.",
    category: "calm",
    icon: "⚖️",
    accent: "#c6e2ff"
  },
  {
    name: "Hallway Walks",
    description: "Pace indoors when you need to think, vent, or shake off stress.",
    category: "energy",
    icon: "🚶",
    accent: "#ffc992"
  },
  {
    name: "Study Break Mobility",
    description: "Loosen your wrists, back, and hips after sitting too long.",
    category: "calm",
    icon: "📚",
    accent: "#bddfcf"
  },
  {
    name: "Skatepark Watching Walk",
    description: "Walk around the park, hang out, and soak in the energy without pressure.",
    category: "social",
    icon: "🛹",
    accent: "#ffd7a8"
  },
  {
    name: "Basket Toss for Fun",
    description: "Shoot casually with no teams, no scorekeeping, and no stress.",
    category: "energy",
    icon: "🏀",
    accent: "#ffb487"
  },
  {
    name: "Bike Cruise",
    description: "Ride for scenery, fresh air, and freedom instead of speed.",
    category: "outdoor",
    icon: "🚲",
    accent: "#bae7f2"
  },
  {
    name: "Stretch While Gaming",
    description: "Pause between rounds to stretch your neck, hands, and legs.",
    category: "calm",
    icon: "🎮",
    accent: "#d8c8ff"
  },
  {
    name: "Friend Walk and Talk",
    description: "Catch up with someone while walking somewhere easy and familiar.",
    category: "social",
    icon: "🗣️",
    accent: "#b7edd0"
  },
  {
    name: "Mindful Cleanup",
    description: "Turn tidying your room into light movement with a solid playlist.",
    category: "energy",
    icon: "🧺",
    accent: "#ffe0a1"
  },
  {
    name: "Nature Pause",
    description: "Stand in the sun, breathe deeply, and notice what is around you.",
    category: "outdoor",
    icon: "🌿",
    accent: "#bfe8ce"
  },
  {
    name: "Stair Session",
    description: "Walk a few flights at your own pace when you want a quick energy shift.",
    category: "energy",
    icon: "🪜",
    accent: "#ffd0a9"
  },
  {
    name: "Yoga With Friends",
    description: "Try simple poses together and laugh through the wobbly parts.",
    category: "social",
    icon: "🤝",
    accent: "#c5dcff"
  },
  {
    name: "Playlist Power Walk",
    description: "Pick three songs and walk like each one is your main-character moment.",
    category: "energy",
    icon: "🎵",
    accent: "#ffbb9d"
  },
  {
    name: "Park Picnic Walk",
    description: "Walk to a picnic spot, hang out, then wander home when you are ready.",
    category: "social",
    icon: "🧺",
    accent: "#d0efb8"
  },
  {
    name: "Gentle Core Session",
    description: "Try low-pressure floor moves that build strength without the intensity.",
    category: "energy",
    icon: "⭐",
    accent: "#ffd1bb"
  },
  {
    name: "Mobility Flow",
    description: "Link shoulder circles, hip openers, and side bends into one smooth routine.",
    category: "calm",
    icon: "〰️",
    accent: "#b7e9e3"
  },
  {
    name: "Creative Freeze Dance",
    description: "Hit play, move however you want, and freeze when the beat drops out.",
    category: "creative",
    icon: "🌀",
    accent: "#ffc4dc"
  },
  {
    name: "Room Redecorating Shuffle",
    description: "Move furniture, test layouts, and stay in motion while changing your space.",
    category: "creative",
    icon: "🪑",
    accent: "#d5ccff"
  },
  {
    name: "Stretch and Journal",
    description: "Alternate short stretches with writing down what is on your mind.",
    category: "calm",
    icon: "✍️",
    accent: "#ffe4b0"
  }
];

const activityGrid = document.getElementById("activityGrid");
const categoryFilter = document.getElementById("categoryFilter");
const activityCount = document.getElementById("activityCount");
const shuffleButton = document.getElementById("shuffleButton");
let carouselTimers = [];

const categoryDetails = {
  calm: {
    title: "Reset & Recharge",
    description: "Slow down, stretch out, and give your mind some space."
  },
  creative: {
    title: "Creative Motion",
    description: "Use music, ideas, and your own style to get moving."
  },
  social: {
    title: "Move Together",
    description: "Low-pressure ways to move with friends, family, or pets."
  },
  outdoor: {
    title: "Outside Energy",
    description: "Fresh-air movement for when you want to get out of your room."
  },
  energy: {
    title: "Easy Energy",
    description: "Small movement boosts for when you want to feel more awake."
  }
};

const categoryOrder = ["calm", "creative", "social", "outdoor", "energy"];

const subgroupDetails = {
  calm: {
    stretch: {
      title: "Stretch & Mobility",
      description: "Easy ways to loosen up after sitting, studying, or gaming."
    },
    mindful: {
      title: "Mindful Moments",
      description: "Quiet resets for your body and your brain."
    }
  },
  creative: {
    rhythm: {
      title: "Dance & Rhythm",
      description: "Press play and move to your own beat."
    },
    make: {
      title: "Make It Your Own",
      description: "Movement that starts with your ideas."
    }
  },
  social: {
    together: {
      title: "With Your People",
      description: "Shared movement without the pressure to compete."
    }
  },
  outdoor: {
    wander: {
      title: "Walk & Wander",
      description: "Slow routes, playlists, and things worth noticing."
    },
    explore: {
      title: "Ride & Explore",
      description: "Fresh-air adventures at your own pace."
    }
  },
  energy: {
    boost: {
      title: "Quick Boosts",
      description: "Small moves for a little more energy in your day."
    }
  }
};

const activitySubgroups = {
  "Morning Stretch Flow": "stretch",
  "Bedroom Yoga": "stretch",
  "Balance Challenge": "stretch",
  "Study Break Mobility": "stretch",
  "Stretch While Gaming": "stretch",
  "Mobility Flow": "stretch",
  "Stretch and Journal": "stretch",
  "Breathing Reset": "mindful",
  "Meditation Minute": "mindful",
  "Dance Break": "rhythm",
  "Mirror Choreo": "rhythm",
  "TikTok Practice": "rhythm",
  "Creative Freeze Dance": "rhythm",
  "Room Redecorating Shuffle": "make",
  "Pet Walk": "together",
  "Skatepark Watching Walk": "together",
  "Friend Walk and Talk": "together",
  "Yoga With Friends": "together",
  "Park Picnic Walk": "together",
  "Music Walk": "wander",
  "Photo Walk": "wander",
  "Sunset Stroll": "wander",
  "Bike Cruise": "explore",
  "Nature Pause": "explore",
  "Hallway Walks": "boost",
  "Basket Toss for Fun": "boost",
  "Mindful Cleanup": "boost",
  "Stair Session": "boost",
  "Playlist Power Walk": "boost",
  "Gentle Core Session": "boost"
};

function renderActivities(filter = "all") {
  const filteredActivities =
    filter === "all"
      ? activities
      : activities.filter((activity) => activity.category === filter);

  const visibleCategories =
    filter === "all" ? categoryOrder : [filter];

  activityGrid.innerHTML = visibleCategories
    .map((category, index) => {
      const categoryActivities = filteredActivities.filter(
        (activity) => activity.category === category
      );
      const detail = categoryDetails[category];
      const subgroups = groupBySubgroup(category, categoryActivities);

      return `
        <section class="activity-group" aria-labelledby="${category}-heading">
          <div class="activity-group-heading">
            <p class="group-number">0${index + 1}</p>
            <div>
              <h3 id="${category}-heading">${detail.title}</h3>
              <p>${detail.description}</p>
            </div>
            <span class="group-count">${categoryActivities.length} moves</span>
          </div>
          <div class="activity-subgroups">
            ${subgroups.map(createSubgroup).join("")}
          </div>
          <button class="show-all-button" type="button" data-show-all aria-expanded="false">
            Show all ${categoryActivities.length} moves
          </button>
        </section>
      `;
    })
    .join("");

  activityCount.textContent = filteredActivities.length;
  initializeCarousels();
}

function groupBySubgroup(category, categoryActivities) {
  const groups = {};

  categoryActivities.forEach((activity) => {
    const subgroup = activitySubgroups[activity.name];

    if (!groups[subgroup]) {
      groups[subgroup] = [];
    }

    groups[subgroup].push(activity);
  });

  return Object.entries(groups).map(([key, activitiesInGroup]) => ({
    key,
    ...subgroupDetails[category][key],
    activities: activitiesInGroup
  }));
}

function createSubgroup(subgroup) {
  const subgroupId = `subgroup-${subgroup.key}`;

  return `
    <section class="activity-subgroup" aria-labelledby="${subgroupId}">
      <div class="subgroup-heading">
        <div>
          <h4 id="${subgroupId}">${subgroup.title}</h4>
          <p>${subgroup.description}</p>
        </div>
        <div class="carousel-controls">
          <button class="carousel-button" type="button" data-carousel-direction="previous" aria-label="Previous ${subgroup.title} moves">&#8592;</button>
          <button class="carousel-button" type="button" data-carousel-direction="next" aria-label="Next ${subgroup.title} moves">&#8594;</button>
        </div>
      </div>
      <div class="carousel-window" tabindex="0" data-active-index="0">
        <div class="card-grid carousel-track">
          ${subgroup.activities.map(createActivityCard).join("")}
        </div>
      </div>
    </section>
  `;
}

function createActivityCard(activity) {
  return `
    <article class="activity-card" style="--card-accent: ${activity.accent}">
      <div class="activity-icon" aria-hidden="true">${activity.icon}</div>
      <div class="activity-meta">${formatCategory(activity.category)}</div>
      <h3>${activity.name}</h3>
      <p>${activity.description}</p>
    </article>
  `;
}

function formatCategory(category) {
  const labels = {
    calm: "Calm",
    creative: "Creative",
    social: "Social",
    outdoor: "Outdoor",
    energy: "Energy boost"
  };

  return labels[category] || category;
}

function pickRandomCategory() {
  const categories = ["all", "calm", "creative", "social", "outdoor", "energy"];
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  categoryFilter.value = randomCategory;
  renderActivities(randomCategory);
}

function initializeCarousels() {
  carouselTimers.forEach((timer) => window.clearInterval(timer));
  carouselTimers = [];

  const carousels = [...activityGrid.querySelectorAll(".carousel-window")];

  carousels.forEach((carouselWindow) => {
    updateCarousel(carouselWindow, 0);

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      carouselTimers.push(
        window.setInterval(() => updateCarousel(carouselWindow, 1), 4600)
      );
    }
  });
}

function updateCarousel(carouselWindow, direction) {
  const cards = [...carouselWindow.querySelectorAll(".activity-card")];
  const cardCount = cards.length;

  if (cardCount === 0) {
    return;
  }

  const currentIndex = Number(carouselWindow.dataset.activeIndex || 0);
  const nextIndex = (currentIndex + direction + cardCount) % cardCount;

  cards.forEach((card, index) => {
    const distance = (index - nextIndex + cardCount) % cardCount;
    let position = "hidden";

    if (distance === 0) {
      position = "active";
    } else if (distance === 1) {
      position = "next";
    } else if (distance === 2) {
      position = "far-next";
    } else if (distance === cardCount - 1) {
      position = "previous";
    } else if (distance === cardCount - 2) {
      position = "far-previous";
    }

    card.dataset.stackPosition = position;
  });

  carouselWindow.dataset.activeIndex = nextIndex;
}

function toggleGroupView(group, showAllButton) {
  const carouselWindows = [...group.querySelectorAll(".carousel-window")];
  const startingHeights = carouselWindows.map(
    (carouselWindow) => carouselWindow.getBoundingClientRect().height
  );
  const isExpanded = group.classList.toggle("is-expanded");

  carouselWindows.forEach((carouselWindow, index) => {
    carouselWindow.style.height = `${startingHeights[index]}px`;
    void carouselWindow.offsetHeight;
    carouselWindow.style.height = `${carouselWindow.scrollHeight}px`;

    window.setTimeout(() => {
      carouselWindow.style.height = "";
    }, 820);
  });

  showAllButton.setAttribute("aria-expanded", isExpanded);
  showAllButton.textContent = isExpanded
    ? "Show carousel view"
    : `Show all ${group.querySelectorAll(".activity-card").length} moves`;
}

categoryFilter.addEventListener("change", (event) => {
  renderActivities(event.target.value);
});

shuffleButton.addEventListener("click", pickRandomCategory);

activityGrid.addEventListener("click", (event) => {
  const carouselButton = event.target.closest("[data-carousel-direction]");
  const showAllButton = event.target.closest("[data-show-all]");

  if (carouselButton) {
    const carouselWindow = carouselButton
      .closest(".activity-subgroup")
      .querySelector(".carousel-window");
    const direction = carouselButton.dataset.carouselDirection === "next" ? 1 : -1;

    updateCarousel(carouselWindow, direction);
  }

  if (showAllButton) {
    const group = showAllButton.closest(".activity-group");
    toggleGroupView(group, showAllButton);
  }
});

renderActivities();
