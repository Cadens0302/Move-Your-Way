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

function renderActivities(filter = "all") {
  const filteredActivities =
    filter === "all"
      ? activities
      : activities.filter((activity) => activity.category === filter);

  activityGrid.innerHTML = filteredActivities
    .map(
      (activity) => `
        <article class="activity-card" style="--card-accent: ${activity.accent}">
          <div class="activity-icon" aria-hidden="true">${activity.icon}</div>
          <div class="activity-meta">${formatCategory(activity.category)}</div>
          <h3>${activity.name}</h3>
          <p>${activity.description}</p>
        </article>
      `
    )
    .join("");

  activityCount.textContent = filteredActivities.length;
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

categoryFilter.addEventListener("change", (event) => {
  renderActivities(event.target.value);
});

shuffleButton.addEventListener("click", pickRandomCategory);

renderActivities();
