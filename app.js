/* ==========================================================================
   CineTrack 🎬 – Main Client-Side Controller & State Engine
   ========================================================================== */

// Default rich sample dataset (12 titles covering Movies, Anime & Series)
const DEFAULT_TITLES = [
  {
    id: "ct-1",
    title: "Attack on Titan",
    type: "anime",
    status: "watching",
    year: 2013,
    platform: "Crunchyroll",
    totalEpisodes: 25,
    episodesWatched: 18,
    genres: ["Action", "Dark Fantasy", "Drama"],
    poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80",
    rating: 9.4,
    favorite: true,
    notes: "Season 1 pacing is phenomenal. Episode 18 Female Titan battle is mindblowing.",
    droppedReason: "",
    addedDate: "2024-01-15"
  },
  {
    id: "ct-2",
    title: "One Piece",
    type: "anime",
    status: "watching",
    year: 1999,
    platform: "Crunchyroll",
    totalEpisodes: 1000,
    episodesWatched: 50,
    genres: ["Shonen", "Adventure", "Fantasy"],
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80",
    rating: 9.0,
    favorite: true,
    notes: "East Blue saga completed! Setting sail for the Grand Line.",
    droppedReason: "",
    addedDate: "2024-02-01"
  },
  {
    id: "ct-3",
    title: "Naruto",
    type: "anime",
    status: "completed",
    year: 2002,
    platform: "Netflix",
    totalEpisodes: 220,
    episodesWatched: 220,
    genres: ["Shonen", "Action", "Martial Arts"],
    poster: "https://images.unsplash.com/photo-1563089145-599997674d42?w=600&auto=format&fit=crop&q=80",
    rating: 8.8,
    favorite: true,
    notes: "Chunin Exam arc and Sasuke Retrieval remain timeless peak shonen.",
    droppedReason: "",
    addedDate: "2023-11-10"
  },
  {
    id: "ct-4",
    title: "Inception",
    type: "movie",
    status: "completed",
    year: 2010,
    platform: "Netflix",
    totalEpisodes: 148,
    episodesWatched: 148,
    genres: ["Sci-Fi", "Thriller", "Action"],
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&auto=format&fit=crop&q=80",
    rating: 9.5,
    favorite: true,
    notes: "Christopher Nolan masterpiece. Hans Zimmer score gives goosebumps every time.",
    droppedReason: "",
    addedDate: "2023-12-05"
  },
  {
    id: "ct-5",
    title: "Interstellar",
    type: "movie",
    status: "completed",
    year: 2014,
    platform: "Prime Video",
    totalEpisodes: 169,
    episodesWatched: 169,
    genres: ["Sci-Fi", "Drama", "Adventure"],
    poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80",
    rating: 9.6,
    favorite: true,
    notes: "Visually breathtaking exploration of relativity, black holes, and love across dimensions.",
    droppedReason: "",
    addedDate: "2023-12-28"
  },
  {
    id: "ct-6",
    title: "Dune: Part Two",
    type: "movie",
    status: "plan",
    year: 2024,
    platform: "Max",
    totalEpisodes: 166,
    episodesWatched: 0,
    genres: ["Sci-Fi", "Adventure", "Drama"],
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80",
    rating: 9.2,
    favorite: false,
    notes: "Heard phenomenal reviews about the sandworm ride and Arrakis cinematography.",
    droppedReason: "",
    addedDate: "2024-03-01"
  },
  {
    id: "ct-7",
    title: "Breaking Bad",
    type: "series",
    status: "completed",
    year: 2008,
    platform: "Netflix",
    totalEpisodes: 62,
    episodesWatched: 62,
    genres: ["Crime", "Drama", "Thriller"],
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop&q=80",
    rating: 9.7,
    favorite: true,
    notes: "Ozymandias and Felina deliver the most satisfying television climax ever written.",
    droppedReason: "",
    addedDate: "2023-10-14"
  },
  {
    id: "ct-8",
    title: "Cyberpunk: Edgerunners",
    type: "anime",
    status: "completed",
    year: 2022,
    platform: "Netflix",
    totalEpisodes: 10,
    episodesWatched: 10,
    genres: ["Sci-Fi", "Action", "Cyberpunk"],
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
    rating: 9.3,
    favorite: true,
    notes: "Studio Trigger knocked it out of the park. Heartbreaking, stylish, unforgettable.",
    droppedReason: "",
    addedDate: "2024-01-20"
  },
  {
    id: "ct-9",
    title: "Stranger Things",
    type: "series",
    status: "watching",
    year: 2016,
    platform: "Netflix",
    totalEpisodes: 34,
    episodesWatched: 28,
    genres: ["Sci-Fi", "Horror", "Drama"],
    poster: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&auto=format&fit=crop&q=80",
    rating: 8.9,
    favorite: false,
    notes: "Season 4 Vecna storyline is so dark and captivating. Finishing Vol 2 next.",
    droppedReason: "",
    addedDate: "2024-02-14"
  },
  {
    id: "ct-10",
    title: "Arcane",
    type: "series",
    status: "plan",
    year: 2021,
    platform: "Netflix",
    totalEpisodes: 9,
    episodesWatched: 0,
    genres: ["Animation", "Sci-Fi", "Action"],
    poster: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
    rating: 9.4,
    favorite: true,
    notes: "Planned weekend binge with friends before Season 2 drops.",
    droppedReason: "",
    addedDate: "2024-03-05"
  },
  {
    id: "ct-11",
    title: "Spirited Away",
    type: "movie",
    status: "completed",
    year: 2001,
    platform: "Max",
    totalEpisodes: 125,
    episodesWatched: 125,
    genres: ["Anime", "Fantasy", "Adventure"],
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80",
    rating: 9.8,
    favorite: true,
    notes: "Hayao Miyazaki and Studio Ghibli magic. Beautiful score by Joe Hisaishi.",
    droppedReason: "",
    addedDate: "2023-09-19"
  },
  {
    id: "ct-12",
    title: "The Last of Us",
    type: "series",
    status: "dropped",
    year: 2023,
    platform: "Max",
    totalEpisodes: 9,
    episodesWatched: 4,
    genres: ["Drama", "Sci-Fi", "Thriller"],
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
    rating: 7.5,
    favorite: false,
    notes: "Episode 3 was touching, but pacing slowed down too much afterwards for me.",
    droppedReason: "Pacing slowed down significantly in the middle episodes; lost interest.",
    addedDate: "2023-11-01"
  }
];

// Main App State
let titles = [];
let activeView = "dashboard";
let activeTypeFilter = "all";
let activeStatusFilter = "all";
let activeGenreFilter = "all";
let activePlatformFilter = "all";
let activeSort = "recent";
let activeSearchQuery = "";
let isListView = false;

// Chart instances
let chartStatusInstance = null;
let chartTypeInstance = null;
let chartGenreInstance = null;
let chartRatingInstance = null;

// Confirmation modal callback
let onConfirmCallback = null;

/* --------------------------------------------------------------------------
   Initialization & LocalStorage Handling
   -------------------------------------------------------------------------- */
function initApp() {
  loadTheme();
  loadTitlesFromStorage();
  setupEventListeners();
  populateGenreFilter();
  updateAllCounters();
  renderCurrentView();
}

function loadTitlesFromStorage() {
  try {
    const stored = localStorage.getItem("cinetrack_titles_v1");
    if (stored) {
      titles = JSON.parse(stored);
    } else {
      titles = [...DEFAULT_TITLES];
      saveTitlesToStorage();
    }
  } catch (err) {
    console.error("LocalStorage load error:", err);
    titles = [...DEFAULT_TITLES];
  }
}

function saveTitlesToStorage() {
  try {
    localStorage.setItem("cinetrack_titles_v1", JSON.stringify(titles));
  } catch (err) {
    console.error("LocalStorage save error:", err);
  }
  updateAllCounters();
}

function loadTheme() {
  try {
    const savedTheme = localStorage.getItem("cinetrack_theme") || "dark";
    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      updateThemeIcons("light");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      updateThemeIcons("dark");
    }
  } catch (e) {
    document.documentElement.classList.add("dark");
  }
}

function toggleTheme() {
  const isDark = document.documentElement.classList.contains("dark");
  if (isDark) {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    try { localStorage.setItem("cinetrack_theme", "light"); } catch(e){}
    updateThemeIcons("light");
    showToast("Switched to Light Theme", "info");
  } else {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
    try { localStorage.setItem("cinetrack_theme", "dark"); } catch(e){}
    updateThemeIcons("dark");
    showToast("Switched to Dark Theme", "info");
  }
  if (activeView === "statistics") {
    renderCharts();
  }
}

function updateThemeIcons(current) {
  const icon = current === "light" ? "fa-sun" : "fa-moon";
  const sidebarBtn = document.getElementById("themeToggleBtn");
  const mobileBtn = document.getElementById("mobileThemeToggleBtn");
  if (sidebarBtn) sidebarBtn.innerHTML = `<i class="fa-solid ${icon}"></i>`;
  if (mobileBtn) mobileBtn.innerHTML = `<i class="fa-solid ${icon}"></i>`;
}

/* --------------------------------------------------------------------------
   Navigation & View Routing
   -------------------------------------------------------------------------- */
function switchView(viewName) {
  activeView = viewName;

  // Update Nav Buttons Active Class
  document.querySelectorAll(".nav-item").forEach(item => {
    if (item.dataset.view === viewName) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // Hide all view sections
  document.querySelectorAll(".view-section").forEach(sec => {
    sec.classList.add("hidden");
  });

  // Show targeted view
  const viewMap = {
    "dashboard": "viewDashboard",
    "library": "viewLibrary",
    "watching": "viewWatching",
    "plan": "viewPlan",
    "completed": "viewCompleted",
    "favorites": "viewFavorites",
    "movies": "viewMovies",
    "anime_tv": "viewAnimeTv",
    "dropped": "viewDropped",
    "statistics": "viewStatistics"
  };

  const targetId = viewMap[viewName] || "viewDashboard";
  const targetElem = document.getElementById(targetId);
  if (targetElem) {
    targetElem.classList.remove("hidden");
  }

  // Close mobile sidebar if open
  closeMobileSidebar();

  // Render view-specific content
  renderCurrentView();

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderCurrentView() {
  if (activeView === "dashboard") {
    renderDashboard();
  } else if (activeView === "library") {
    renderLibrary();
  } else if (activeView === "watching") {
    renderWatchingView();
  } else if (activeView === "plan") {
    renderPlanView();
  } else if (activeView === "completed") {
    renderCompletedView();
  } else if (activeView === "favorites") {
    renderFavoritesView();
  } else if (activeView === "movies") {
    renderMoviesView();
  } else if (activeView === "anime_tv") {
    renderAnimeTvView();
  } else if (activeView === "dropped") {
    renderDroppedView();
  } else if (activeView === "statistics") {
    renderStatisticsView();
  }
}

/* --------------------------------------------------------------------------
   Counters & Badge Updates
   -------------------------------------------------------------------------- */
function updateAllCounters() {
  const total = titles.length;
  const watching = titles.filter(t => t.status === "watching").length;
  const plan = titles.filter(t => t.status === "plan").length;
  const completed = titles.filter(t => t.status === "completed").length;
  const dropped = titles.filter(t => t.status === "dropped").length;
  const favorites = titles.filter(t => t.favorite).length;
  const movies = titles.filter(t => t.type === "movie").length;
  const animeTv = titles.filter(t => t.type === "anime" || t.type === "series").length;

  // Calculate total episodes watched
  let totalEps = 0;
  titles.forEach(t => {
    if (t.type === "movie") {
      if (t.status === "completed") totalEps += 1;
    } else {
      totalEps += (parseInt(t.episodesWatched) || 0);
    }
  });

  // Update Badges in Sidebar
  const setEl = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  setEl("badgeTotal", total);
  setEl("badgeWatching", watching);
  setEl("badgePlan", plan);
  setEl("badgeCompleted", completed);
  setEl("badgeDropped", dropped);
  setEl("badgeFavorites", favorites);
  setEl("badgeMovies", movies);
  setEl("badgeAnimeTv", animeTv);

  // Dashboard Header Bento Stats
  setEl("statTotalTitles", total);
  setEl("statCompletedTitles", completed);
  setEl("statWatchingTitles", watching);
  setEl("statEpisodesWatched", totalEps);
  setEl("statTypeBreakdownMini", `${movies} Movies • ${animeTv} Shows & Anime`);

  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;
  setEl("statCompletionRate", `${completionRate}%`);

  // Estimated screen time (~25m for anime, ~50m for TV series, movie runtime)
  let totalMinutes = 0;
  titles.forEach(t => {
    if (t.type === "movie") {
      if (t.status === "completed") {
        totalMinutes += (t.totalEpisodes || 120);
      }
    } else if (t.type === "anime") {
      totalMinutes += (t.episodesWatched || 0) * 24;
    } else {
      totalMinutes += (t.episodesWatched || 0) * 50;
    }
  });
  const hours = Math.round(totalMinutes / 60);
  setEl("statEstimatedHours", `~${hours} hours screen time`);

  // Dashboard mini sidebar stats
  setEl("dashStatWatching", watching);
  setEl("dashStatPlan", plan);
  setEl("dashStatCompleted", completed);
  setEl("dashStatDropped", dropped);
  setEl("dashStatFavorites", favorites);
  setEl("dashboardProgressPercent", `${completionRate}%`);

  const pBar = document.getElementById("dashboardProgressBar");
  if (pBar) pBar.style.width = `${completionRate}%`;

  // Average score
  const ratedTitles = titles.filter(t => t.rating && t.rating > 0);
  const avg = ratedTitles.length > 0 
    ? (ratedTitles.reduce((acc, t) => acc + parseFloat(t.rating), 0) / ratedTitles.length).toFixed(1)
    : "0.0";
  setEl("dashAvgRating", avg);

  const countContinue = document.getElementById("continueWatchingCount");
  if (countContinue) countContinue.textContent = `${watching} ongoing`;

  const libCount = document.getElementById("libraryTitleCount");
  if (libCount) libCount.textContent = `${total} titles`;
}

/* --------------------------------------------------------------------------
   View Renderers: Dashboard
   -------------------------------------------------------------------------- */
function renderDashboard() {
  // 1. Render Continue Watching
  const watchingTitles = titles.filter(t => t.status === "watching");
  const continueContainer = document.getElementById("continueWatchingContainer");
  if (!continueContainer) return;

  if (watchingTitles.length === 0) {
    continueContainer.innerHTML = `
      <div class="col-span-full theme-card rounded-2xl p-6 text-center space-y-2">
        <i class="fa-solid fa-circle-play text-brand-accent text-2xl"></i>
        <h4 class="font-display font-semibold text-sm">No Titles In Progress</h4>
        <p class="text-xs" style="color: var(--text-secondary);">Add an anime or series to "Currently Watching" to track episode milestones here.</p>
      </div>
    `;
  } else {
    continueContainer.innerHTML = watchingTitles.map(item => {
      const total = item.totalEpisodes || 1;
      const current = Math.min(item.episodesWatched || 0, total);
      const percent = Math.min(100, Math.round((current / total) * 100));
      const typeIcon = item.type === "movie" ? "fa-film" : (item.type === "anime" ? "fa-sparkles" : "fa-tv");

      return `
        <div class="theme-card rounded-2xl p-4 flex gap-4 relative group hover:border-brand-accent transition-all duration-200">
          <div class="w-20 h-28 rounded-xl overflow-hidden shrink-0 relative bg-gray-800 shadow-md">
            <img src="${escapeHtml(item.poster)}" alt="${escapeHtml(item.title)}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onerror="this.src='https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&auto=format&fit=crop&q=80'">
            <button onclick="handleToggleFavorite('${item.id}')" aria-label="Favorite toggle" class="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-black/60 flex items-center justify-center text-xs ${item.favorite ? 'text-pink-400' : 'text-gray-300'} hover:scale-110 transition-transform">
              <i class="fa-solid fa-heart"></i>
            </button>
          </div>

          <div class="flex-1 flex flex-col justify-between min-w-0">
            <div>
              <div class="flex items-center space-x-2">
                <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-500/20 text-brand-accent">
                  <i class="fa-solid ${typeIcon} text-[9px] mr-1"></i>${escapeHtml(item.type)}
                </span>
                <span class="text-[10px] font-medium" style="color: var(--text-muted);">${escapeHtml(item.platform || 'Online')}</span>
              </div>

              <h4 class="font-display font-bold text-sm mt-1 truncate hover:text-brand-accent cursor-pointer transition-colors" onclick="openDetailModal('${item.id}')">
                ${escapeHtml(item.title)}
              </h4>

              <p class="text-[11px] line-clamp-1 mt-0.5 italic" style="color: var(--text-secondary);">
                ${escapeHtml(item.notes || 'No recent notes')}
              </p>
            </div>

            <!-- Progress Bar & Episode Controls -->
            <div class="space-y-1.5 pt-2">
              <div class="flex items-center justify-between text-xs">
                <span class="font-semibold" style="color: var(--text-secondary);">Ep ${current} of ${total}</span>
                <span class="font-bold text-brand-accent">${percent}%</span>
              </div>
              <div class="w-full h-2 rounded-full overflow-hidden" style="background: var(--bg-card-subtle);">
                <div class="progress-bar-fill h-full rounded-full transition-all duration-300" style="width: ${percent}%;"></div>
              </div>
              
              <div class="flex items-center justify-between pt-1">
                <div class="flex items-center space-x-1">
                  <button onclick="handleStepEpisode('${item.id}', -1)" aria-label="Previous episode" class="w-7 h-7 rounded-lg theme-input flex items-center justify-center text-xs hover:border-brand-accent transition-colors" title="-1 Episode">
                    <i class="fa-solid fa-minus text-[10px]"></i>
                  </button>
                  <button onclick="handleStepEpisode('${item.id}', 1)" class="px-2.5 h-7 rounded-lg text-white font-semibold text-xs flex items-center space-x-1 transition-transform hover:scale-105 active:scale-95 shadow-sm" style="background: linear-gradient(135deg, #9B83FF, #6C56DF);" title="+1 Episode">
                    <i class="fa-solid fa-plus text-[10px]"></i>
                    <span>Next Ep</span>
                  </button>
                </div>

                <button onclick="openDetailModal('${item.id}')" aria-label="More details" class="text-xs hover:text-brand-accent transition-colors p-1" title="Details">
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                </button>
              </div>
            </div>

          </div>
        </div>
      `;
    }).join("");
  }

  // 2. Render Recently Added
  const recentContainer = document.getElementById("recentlyAddedContainer");
  if (!recentContainer) return;

  const recentTitles = [...titles].reverse().slice(0, 4);
  recentContainer.innerHTML = recentTitles.map(item => {
    return `
      <div class="theme-card rounded-2xl p-3.5 flex items-center space-x-3.5 cursor-pointer hover:border-brand-accent transition-all group" onclick="openDetailModal('${item.id}')">
        <div class="w-14 h-18 rounded-xl overflow-hidden shrink-0 bg-gray-800 shadow-sm">
          <img src="${escapeHtml(item.poster)}" alt="${escapeHtml(item.title)}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" onerror="this.src='https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&auto=format&fit=crop&q=80'">
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center space-x-1.5 text-[10px]">
            <span class="font-bold uppercase tracking-wider text-brand-accent">${escapeHtml(item.type)}</span>
            <span style="color: var(--text-muted);">•</span>
            <span style="color: var(--text-muted);">${item.year || '2024'}</span>
          </div>
          <h5 class="font-display font-semibold text-sm truncate group-hover:text-brand-accent transition-colors mt-0.5">
            ${escapeHtml(item.title)}
          </h5>
          <div class="flex items-center space-x-2 mt-1 text-xs">
            <span class="flex items-center space-x-1 text-brand-warning">
              <i class="fa-solid fa-star text-[10px]"></i>
              <span class="font-semibold text-[11px]">${item.rating || 'N/A'}</span>
            </span>
            <span class="text-[10px] px-1.5 py-0.2 rounded font-medium" style="background: var(--bg-card-subtle); color: var(--text-secondary);">
              ${capitalizeFirst(item.status)}
            </span>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

/* --------------------------------------------------------------------------
   View Renderers: Library
   -------------------------------------------------------------------------- */
function renderLibrary() {
  const container = document.getElementById("libraryContainer");
  const emptyState = document.getElementById("libraryEmptyState");
  if (!container) return;

  // Filter titles according to current filter state
  let filtered = titles.filter(item => {
    // Search query
    if (activeSearchQuery) {
      const q = activeSearchQuery.toLowerCase();
      const matchTitle = (item.title || "").toLowerCase().includes(q);
      const matchGenre = (item.genres || []).some(g => g.toLowerCase().includes(q));
      const matchNotes = (item.notes || "").toLowerCase().includes(q);
      if (!matchTitle && !matchGenre && !matchNotes) return false;
    }

    // Type filter
    if (activeTypeFilter !== "all") {
      if (activeTypeFilter === "series" && item.type !== "series") return false;
      if (activeTypeFilter === "anime" && item.type !== "anime") return false;
      if (activeTypeFilter === "movie" && item.type !== "movie") return false;
    }

    // Status filter
    if (activeStatusFilter !== "all" && item.status !== activeStatusFilter) return false;

    // Genre filter
    if (activeGenreFilter !== "all") {
      if (!(item.genres || []).map(g => g.toLowerCase()).includes(activeGenreFilter.toLowerCase())) {
        return false;
      }
    }

    // Platform filter
    if (activePlatformFilter !== "all" && item.platform !== activePlatformFilter) {
      return false;
    }

    return true;
  });

  // Sort
  filtered.sort((a, b) => {
    if (activeSort === "recent") return 0;
    if (activeSort === "title_asc") return (a.title || "").localeCompare(b.title || "");
    if (activeSort === "title_desc") return (b.title || "").localeCompare(a.title || "");
    if (activeSort === "rating_desc") return (parseFloat(b.rating) || 0) - (parseFloat(a.rating) || 0);
    if (activeSort === "rating_asc") return (parseFloat(a.rating) || 0) - (parseFloat(b.rating) || 0);
    if (activeSort === "year_desc") return (parseInt(b.year) || 0) - (parseInt(a.year) || 0);
    if (activeSort === "year_asc") return (parseInt(a.year) || 0) - (parseInt(b.year) || 0);
    return 0;
  });

  // Update active filter badge
  const filterBadge = document.getElementById("activeFilterBadge");
  const filterText = document.getElementById("activeFilterText");
  const hasActiveFilters = activeTypeFilter !== "all" || activeStatusFilter !== "all" || activeGenreFilter !== "all" || activePlatformFilter !== "all" || activeSearchQuery !== "";

  if (hasActiveFilters && filterBadge && filterText) {
    filterBadge.classList.remove("hidden");
    filterBadge.classList.add("flex");
    filterText.textContent = `Filtered (${filtered.length} of ${titles.length})`;
  } else if (filterBadge) {
    filterBadge.classList.add("hidden");
    filterBadge.classList.remove("flex");
  }

  if (filtered.length === 0) {
    container.innerHTML = "";
    if (emptyState) emptyState.classList.remove("hidden");
    return;
  }

  if (emptyState) emptyState.classList.add("hidden");

  if (isListView) {
    container.className = "space-y-3";
    container.innerHTML = filtered.map(item => renderListItem(item)).join("");
  } else {
    container.className = "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5";
    container.innerHTML = filtered.map(item => renderGridCard(item)).join("");
  }
}

function renderGridCard(item) {
  const typeBadgeColor = item.type === "movie" ? "bg-amber-500/20 text-amber-400" : (item.type === "anime" ? "bg-purple-500/20 text-brand-accent" : "bg-indigo-500/20 text-indigo-400");
  const statusBadge = getStatusBadge(item.status);

  const total = item.totalEpisodes || 1;
  const current = Math.min(item.episodesWatched || 0, total);
  const percent = Math.min(100, Math.round((current / total) * 100));

  return `
    <div class="theme-card rounded-2xl overflow-hidden flex flex-col group relative transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10 hover:border-brand-accent">
      <!-- Poster Container -->
      <div class="relative aspect-[2/3] w-full overflow-hidden bg-gray-900 cursor-pointer" onclick="openDetailModal('${item.id}')">
        <img src="${escapeHtml(item.poster)}" alt="${escapeHtml(item.title)}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onerror="this.src='https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&auto=format&fit=crop&q=80'">
        
        <!-- Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-black/40 opacity-70 group-hover:opacity-90 transition-opacity"></div>

        <!-- Top Badges -->
        <div class="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
          <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${typeBadgeColor} backdrop-blur-md">
            ${escapeHtml(item.type)}
          </span>
          <button onclick="event.stopPropagation(); handleToggleFavorite('${item.id}')" aria-label="Favorite toggle" class="w-7 h-7 rounded-full bg-black/60 flex items-center justify-center text-xs ${item.favorite ? 'text-pink-400' : 'text-gray-300 hover:text-white'} hover:scale-110 transition-transform">
            <i class="fa-solid fa-heart"></i>
          </button>
        </div>

        <!-- Score Badge in Poster Bottom -->
        <div class="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between">
          <span class="flex items-center space-x-1 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[11px] font-bold text-brand-warning">
            <i class="fa-solid fa-star text-[10px]"></i>
            <span>${item.rating || 'N/A'}</span>
          </span>
          <span class="text-[10px] font-semibold text-white/80">
            ${item.year || ''}
          </span>
        </div>
      </div>

      <!-- Card Info -->
      <div class="p-3.5 flex-1 flex flex-col justify-between space-y-2.5">
        <div>
          <h4 class="font-display font-bold text-sm leading-snug line-clamp-1 group-hover:text-brand-accent transition-colors cursor-pointer" onclick="openDetailModal('${item.id}')">
            ${escapeHtml(item.title)}
          </h4>
          <div class="flex items-center space-x-1.5 mt-1 text-[11px]" style="color: var(--text-muted);">
            <span class="line-clamp-1">${(item.genres || []).slice(0, 2).join(", ")}</span>
          </div>
        </div>

        <!-- Episode Progress & Status -->
        <div class="space-y-1.5 pt-1 border-t" style="border-color: var(--border-color);">
          <div class="flex items-center justify-between text-[11px]">
            ${statusBadge}
            <span class="font-semibold text-[10px]" style="color: var(--text-secondary);">
              ${item.type === 'movie' ? `${item.totalEpisodes || 120}m` : `Ep ${current}/${total}`}
            </span>
          </div>

          ${item.type !== 'movie' ? `
            <div class="w-full h-1.5 rounded-full overflow-hidden" style="background: var(--bg-card-subtle);">
              <div class="progress-bar-fill h-full rounded-full" style="width: ${percent}%;"></div>
            </div>
          ` : ''}

          <!-- Quick Action Row -->
          <div class="flex items-center justify-between pt-1">
            <span class="text-[10px]" style="color: var(--text-muted);">${escapeHtml(item.platform || 'Streaming')}</span>
            <div class="flex items-center space-x-1">
              ${item.status === 'watching' ? `
                <button onclick="handleStepEpisode('${item.id}', 1)" class="px-2 py-0.5 rounded text-[10px] font-bold text-white bg-brand-accent hover:opacity-90 transition-opacity" title="Next Episode">+1</button>
              ` : ''}
              <button onclick="openEditModal('${item.id}')" aria-label="Edit title" class="p-1 text-xs hover:text-brand-accent transition-colors" title="Edit">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button onclick="confirmDeleteTitle('${item.id}')" aria-label="Delete title" class="p-1 text-xs text-secondary hover:text-red-400 transition-colors" title="Delete">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;
}

function renderListItem(item) {
  const statusBadge = getStatusBadge(item.status);
  const total = item.totalEpisodes || 1;
  const current = Math.min(item.episodesWatched || 0, total);
  const percent = Math.min(100, Math.round((current / total) * 100));

  return `
    <div class="theme-card rounded-xl p-3 flex items-center justify-between gap-4 hover:border-brand-accent transition-all group">
      <div class="flex items-center space-x-3.5 min-w-0">
        <div class="w-12 h-16 rounded-lg overflow-hidden bg-gray-800 shrink-0 cursor-pointer" onclick="openDetailModal('${item.id}')">
          <img src="${escapeHtml(item.poster)}" alt="${escapeHtml(item.title)}" class="w-full h-full object-cover group-hover:scale-105 transition-transform" onerror="this.src='https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&auto=format&fit=crop&q=80'">
        </div>
        <div class="min-w-0">
          <div class="flex items-center space-x-2">
            <span class="text-[10px] font-bold uppercase tracking-wider text-brand-accent">${escapeHtml(item.type)}</span>
            <span class="text-[10px]" style="color: var(--text-muted);">${item.year || ''}</span>
            <span class="text-[10px]" style="color: var(--text-muted);">${escapeHtml(item.platform || '')}</span>
          </div>
          <h4 class="font-display font-bold text-sm truncate group-hover:text-brand-accent cursor-pointer transition-colors" onclick="openDetailModal('${item.id}')">
            ${escapeHtml(item.title)}
          </h4>
          <p class="text-[11px] truncate" style="color: var(--text-secondary);">${(item.genres || []).join(", ")}</p>
        </div>
      </div>

      <div class="flex items-center space-x-4 shrink-0">
        <div class="hidden sm:block text-right">
          <div class="text-xs font-semibold">${item.type === 'movie' ? `${item.totalEpisodes}m` : `Ep ${current} / ${total}`}</div>
          <div class="text-[10px]" style="color: var(--text-muted);">${percent}% completed</div>
        </div>

        <div class="flex items-center space-x-1 text-brand-warning text-xs font-bold">
          <i class="fa-solid fa-star text-[11px]"></i>
          <span>${item.rating || 'N/A'}</span>
        </div>

        ${statusBadge}

        <div class="flex items-center space-x-1">
          <button onclick="handleToggleFavorite('${item.id}')" aria-label="Favorite toggle" class="p-2 text-xs ${item.favorite ? 'text-pink-400' : 'text-gray-400'} hover:scale-110 transition-transform">
            <i class="fa-solid fa-heart"></i>
          </button>
          <button onclick="openEditModal('${item.id}')" aria-label="Edit title" class="p-2 text-xs hover:text-brand-accent transition-colors">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button onclick="confirmDeleteTitle('${item.id}')" aria-label="Delete title" class="p-2 text-xs text-secondary hover:text-red-400 transition-colors">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   View Renderers: Currently Watching Page
   -------------------------------------------------------------------------- */
function renderWatchingView() {
  const container = document.getElementById("watchingListContainer");
  if (!container) return;

  const watchingList = titles.filter(t => t.status === "watching");

  if (watchingList.length === 0) {
    container.innerHTML = `
      <div class="p-8 text-center space-y-2">
        <i class="fa-solid fa-circle-play text-brand-accent text-3xl"></i>
        <h4 class="font-display font-semibold text-sm">No Titles In Progress</h4>
        <p class="text-xs" style="color: var(--text-secondary);">Browse your library or plan-to-watch queue to start watching a series.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = watchingList.map(item => {
    const total = item.totalEpisodes || 1;
    const current = Math.min(item.episodesWatched || 0, total);
    const percent = Math.min(100, Math.round((current / total) * 100));

    return `
      <div class="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors">
        <div class="flex items-center space-x-3.5 min-w-0">
          <div class="w-16 h-22 rounded-xl overflow-hidden bg-gray-800 shrink-0 cursor-pointer shadow" onclick="openDetailModal('${item.id}')">
            <img src="${escapeHtml(item.poster)}" alt="${escapeHtml(item.title)}" class="w-full h-full object-cover" onerror="this.src='https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&auto=format&fit=crop&q=80'">
          </div>
          <div class="min-w-0 space-y-1">
            <div class="flex items-center space-x-2">
              <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-500/20 text-brand-accent">
                ${escapeHtml(item.type)}
              </span>
              <span class="text-xs" style="color: var(--text-muted);">${escapeHtml(item.platform || '')}</span>
            </div>
            <h4 class="font-display font-bold text-base truncate hover:text-brand-accent cursor-pointer transition-colors" onclick="openDetailModal('${item.id}')">
              ${escapeHtml(item.title)}
            </h4>
            <p class="text-xs italic line-clamp-1" style="color: var(--text-secondary);">${escapeHtml(item.notes || 'No notes added.')}</p>
          </div>
        </div>

        <!-- Progress Bar & Quick Step Buttons -->
        <div class="flex items-center space-x-6 shrink-0">
          <div class="w-44 space-y-1">
            <div class="flex items-center justify-between text-xs">
              <span class="font-semibold">Ep ${current} / ${total}</span>
              <span class="font-bold text-brand-accent">${percent}%</span>
            </div>
            <div class="w-full h-2 rounded-full overflow-hidden" style="background: var(--bg-card-subtle);">
              <div class="progress-bar-fill h-full rounded-full transition-all duration-300" style="width: ${percent}%;"></div>
            </div>
          </div>

          <div class="flex items-center space-x-1.5">
            <button onclick="handleStepEpisode('${item.id}', -1)" aria-label="Decrement episode" class="w-8 h-8 rounded-lg theme-input flex items-center justify-center text-xs hover:border-brand-accent transition-colors" title="-1 Episode">
              <i class="fa-solid fa-minus"></i>
            </button>
            <button onclick="handleStepEpisode('${item.id}', 1)" class="px-3 h-8 rounded-lg text-white font-semibold text-xs flex items-center space-x-1 bg-brand-accent hover:opacity-90 shadow-sm" title="+1 Episode">
              <i class="fa-solid fa-plus text-[10px]"></i>
              <span>Next Ep</span>
            </button>
          </div>

          <button onclick="handleQuickMoveStatus('${item.id}', 'completed')" class="px-3 py-1.5 rounded-xl text-xs font-semibold text-brand-success theme-input hover:bg-green-500/10 transition-colors" title="Mark as Completed">
            <i class="fa-solid fa-circle-check mr-1"></i>Finish
          </button>
        </div>
      </div>
    `;
  }).join("");
}

/* --------------------------------------------------------------------------
   View Renderers: Plan to Watch Page
   -------------------------------------------------------------------------- */
function renderPlanView() {
  const container = document.getElementById("planListContainer");
  if (!container) return;

  const planList = titles.filter(t => t.status === "plan");

  if (planList.length === 0) {
    container.innerHTML = `
      <div class="col-span-full theme-card rounded-2xl p-10 text-center space-y-3">
        <i class="fa-solid fa-bookmark text-blue-400 text-3xl"></i>
        <h4 class="font-display font-semibold text-base">Watchlist Queue is Empty</h4>
        <p class="text-xs" style="color: var(--text-secondary);">Add titles you plan to watch later so you never run out of entertainment.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = planList.map(item => {
    return `
      <div class="theme-card rounded-2xl p-4 flex gap-4 group hover:border-brand-accent transition-all">
        <div class="w-20 h-28 rounded-xl overflow-hidden shrink-0 bg-gray-800 shadow cursor-pointer" onclick="openDetailModal('${item.id}')">
          <img src="${escapeHtml(item.poster)}" alt="${escapeHtml(item.title)}" class="w-full h-full object-cover group-hover:scale-105 transition-transform" onerror="this.src='https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&auto=format&fit=crop&q=80'">
        </div>
        <div class="flex-1 flex flex-col justify-between min-w-0">
          <div>
            <div class="flex items-center space-x-2 text-[10px]">
              <span class="font-bold uppercase tracking-wider text-blue-400">${escapeHtml(item.type)}</span>
              <span style="color: var(--text-muted);">${item.year || ''}</span>
              <span style="color: var(--text-muted);">${escapeHtml(item.platform || '')}</span>
            </div>
            <h4 class="font-display font-bold text-sm truncate mt-0.5 hover:text-brand-accent cursor-pointer transition-colors" onclick="openDetailModal('${item.id}')">
              ${escapeHtml(item.title)}
            </h4>
            <p class="text-[11px] line-clamp-1 mt-0.5" style="color: var(--text-secondary);">${(item.genres || []).join(", ")}</p>
          </div>

          <div class="pt-2 flex items-center justify-between border-t" style="border-color: var(--border-color);">
            <button onclick="handleQuickMoveStatus('${item.id}', 'watching')" class="px-3 py-1.5 rounded-lg text-white font-semibold text-xs flex items-center space-x-1.5 shadow-sm transition-transform hover:scale-105" style="background: linear-gradient(135deg, #9B83FF, #6C56DF);">
              <i class="fa-solid fa-play text-[9px]"></i>
              <span>Start Watching</span>
            </button>
            <button onclick="confirmDeleteTitle('${item.id}')" aria-label="Remove title" class="p-1.5 text-xs text-secondary hover:text-red-400 transition-colors" title="Remove">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

/* --------------------------------------------------------------------------
   View Renderers: Completed Page
   -------------------------------------------------------------------------- */
function renderCompletedView() {
  const container = document.getElementById("completedListContainer");
  if (!container) return;

  const completedList = titles.filter(t => t.status === "completed");

  if (completedList.length === 0) {
    container.innerHTML = `
      <div class="col-span-full theme-card rounded-2xl p-10 text-center space-y-3">
        <i class="fa-solid fa-circle-check text-brand-success text-3xl"></i>
        <h4 class="font-display font-semibold text-base">No Completed Titles Yet</h4>
        <p class="text-xs" style="color: var(--text-secondary);">As you finish watching anime series, TV shows, and movies, they will appear here with your personal score.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = completedList.map(item => {
    return `
      <div class="theme-card rounded-2xl p-4 flex gap-4 group hover:border-brand-accent transition-all">
        <div class="w-22 h-32 rounded-xl overflow-hidden shrink-0 bg-gray-800 shadow cursor-pointer relative" onclick="openDetailModal('${item.id}')">
          <img src="${escapeHtml(item.poster)}" alt="${escapeHtml(item.title)}" class="w-full h-full object-cover group-hover:scale-105 transition-transform" onerror="this.src='https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&auto=format&fit=crop&q=80'">
          <div class="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/70 text-[10px] font-bold text-brand-warning">
            ★ ${item.rating || 'N/A'}
          </div>
        </div>
        <div class="flex-1 flex flex-col justify-between min-w-0">
          <div>
            <div class="flex items-center space-x-2 text-[10px]">
              <span class="font-bold uppercase tracking-wider text-brand-success">Finished</span>
              <span style="color: var(--text-muted);">${item.year || ''}</span>
              <span style="color: var(--text-muted);">${escapeHtml(item.type)}</span>
            </div>
            <h4 class="font-display font-bold text-sm truncate mt-0.5 hover:text-brand-accent cursor-pointer transition-colors" onclick="openDetailModal('${item.id}')">
              ${escapeHtml(item.title)}
            </h4>
            <p class="text-xs italic line-clamp-2 mt-1.5 p-2 rounded-lg" style="background: var(--bg-card-subtle); color: var(--text-secondary);">
              "${escapeHtml(item.notes || 'Masterpiece completed.')}"
            </p>
          </div>

          <div class="pt-2 flex items-center justify-between text-xs" style="color: var(--text-muted);">
            <span>${item.type === 'movie' ? `${item.totalEpisodes}m runtime` : `${item.totalEpisodes} episodes`}</span>
            <button onclick="openEditModal('${item.id}')" class="text-brand-accent font-semibold hover:underline">Edit Review</button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

/* --------------------------------------------------------------------------
   View Renderers: Favorites, Movies, Anime/TV, Dropped
   -------------------------------------------------------------------------- */
function renderFavoritesView() {
  const container = document.getElementById("favoritesListContainer");
  if (!container) return;
  const favList = titles.filter(t => t.favorite);

  if (favList.length === 0) {
    container.innerHTML = `
      <div class="col-span-full theme-card rounded-2xl p-10 text-center space-y-3">
        <i class="fa-solid fa-heart text-pink-400 text-3xl"></i>
        <h4 class="font-display font-semibold text-base">No Favorites Added</h4>
        <p class="text-xs" style="color: var(--text-secondary);">Click the heart icon on any title card in your library to add it to your favorites collection.</p>
      </div>
    `;
    return;
  }
  container.innerHTML = favList.map(item => renderGridCard(item)).join("");
}

function renderMoviesView() {
  const container = document.getElementById("moviesListContainer");
  if (!container) return;
  const movieList = titles.filter(t => t.type === "movie");

  if (movieList.length === 0) {
    container.innerHTML = `
      <div class="col-span-full theme-card rounded-2xl p-10 text-center space-y-3">
        <i class="fa-solid fa-clapperboard text-amber-400 text-3xl"></i>
        <h4 class="font-display font-semibold text-base">No Movies Saved</h4>
        <p class="text-xs" style="color: var(--text-secondary);">Add your favorite cinema and feature films here.</p>
      </div>
    `;
    return;
  }
  container.innerHTML = movieList.map(item => renderGridCard(item)).join("");
}

function renderAnimeTvView() {
  const container = document.getElementById("animeTvListContainer");
  if (!container) return;
  const animeTvList = titles.filter(t => t.type === "anime" || t.type === "series");

  if (animeTvList.length === 0) {
    container.innerHTML = `
      <div class="col-span-full theme-card rounded-2xl p-10 text-center space-y-3">
        <i class="fa-solid fa-tv text-indigo-400 text-3xl"></i>
        <h4 class="font-display font-semibold text-base">No Episodic Series Saved</h4>
        <p class="text-xs" style="color: var(--text-secondary);">Track anime seasons, TV shows, and mini-series here.</p>
      </div>
    `;
    return;
  }
  container.innerHTML = animeTvList.map(item => renderGridCard(item)).join("");
}

function renderDroppedView() {
  const container = document.getElementById("droppedListContainer");
  if (!container) return;
  const droppedList = titles.filter(t => t.status === "dropped");

  if (droppedList.length === 0) {
    container.innerHTML = `
      <div class="col-span-full theme-card rounded-2xl p-10 text-center space-y-3">
        <i class="fa-solid fa-circle-xmark text-red-400 text-3xl"></i>
        <h4 class="font-display font-semibold text-base">No Dropped Titles</h4>
        <p class="text-xs" style="color: var(--text-secondary);">Titles you decide not to finish can be stored here along with your reasoning.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = droppedList.map(item => {
    return `
      <div class="theme-card rounded-2xl p-4 space-y-3 border border-red-500/20">
        <div class="flex items-center space-x-3">
          <div class="w-14 h-20 rounded-xl overflow-hidden shrink-0 bg-gray-800 shadow">
            <img src="${escapeHtml(item.poster)}" alt="${escapeHtml(item.title)}" class="w-full h-full object-cover" onerror="this.src='https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&auto=format&fit=crop&q=80'">
          </div>
          <div class="min-w-0 flex-1">
            <span class="text-[10px] font-bold uppercase tracking-wider text-red-400">Dropped</span>
            <h4 class="font-display font-bold text-sm truncate mt-0.5">${escapeHtml(item.title)}</h4>
            <div class="text-[11px]" style="color: var(--text-muted);">${item.episodesWatched || 0} of ${item.totalEpisodes || 0} eps watched</div>
          </div>
        </div>

        <div class="p-2.5 rounded-xl bg-red-500/10 text-xs text-red-400">
          <span class="font-semibold">Reason:</span> ${escapeHtml(item.droppedReason || 'Lost interest')}
        </div>

        <div class="flex items-center justify-between pt-1 border-t" style="border-color: var(--border-color);">
          <button onclick="handleQuickMoveStatus('${item.id}', 'watching')" class="px-3 py-1.5 rounded-lg text-white font-semibold text-xs flex items-center space-x-1" style="background: linear-gradient(135deg, #9B83FF, #6C56DF);">
            <i class="fa-solid fa-rotate-left text-[10px]"></i>
            <span>Resume Watching</span>
          </button>
          <button onclick="confirmDeleteTitle('${item.id}')" aria-label="Delete dropped title" class="p-1.5 text-xs text-secondary hover:text-red-400 transition-colors" title="Delete">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    `;
  }).join("");
}

/* --------------------------------------------------------------------------
   View Renderers: Statistics & Charts
   -------------------------------------------------------------------------- */
function renderStatisticsView() {
  const total = titles.length;
  const completed = titles.filter(t => t.status === "completed").length;
  const favs = titles.filter(t => t.favorite).length;

  // Calculate Screen Time
  let totalMinutes = 0;
  titles.forEach(t => {
    if (t.type === "movie") {
      if (t.status === "completed") totalMinutes += (t.totalEpisodes || 120);
    } else if (t.type === "anime") {
      totalMinutes += (t.episodesWatched || 0) * 24;
    } else {
      totalMinutes += (t.episodesWatched || 0) * 50;
    }
  });
  const hours = Math.round(totalMinutes / 60);
  const days = (hours / 24).toFixed(1);

  // Mean rating
  const rated = titles.filter(t => t.rating && t.rating > 0);
  const meanRating = rated.length > 0
    ? (rated.reduce((sum, t) => sum + parseFloat(t.rating), 0) / rated.length).toFixed(1)
    : "0.0";

  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;
  const favRate = total > 0 ? Math.round((favs / total) * 100) : 0;

  const setEl = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  setEl("statsScreenTimeHours", `${hours} hrs`);
  setEl("statsScreenTimeDays", `~${days} continuous days`);
  setEl("statsMeanRating", meanRating);
  setEl("statsCompletionRateBig", `${completionRate}%`);
  setEl("statsCompletedRatio", `${completed} of ${total} finished`);
  setEl("statsFavoriteCount", favs);
  setEl("statsFavoriteRatio", `${favRate}% of entire library`);

  renderCharts();
}

function renderCharts() {
  if (typeof Chart === "undefined") return;

  const isLight = document.documentElement.classList.contains("light");
  const textColor = isLight ? "#141624" : "#F4F4F8";
  const gridColor = isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.06)";

  // 1. Chart: Status Breakdown (Doughnut)
  const watching = titles.filter(t => t.status === "watching").length;
  const plan = titles.filter(t => t.status === "plan").length;
  const completed = titles.filter(t => t.status === "completed").length;
  const dropped = titles.filter(t => t.status === "dropped").length;

  const ctxStatus = document.getElementById("chartStatus");
  if (ctxStatus) {
    if (chartStatusInstance) chartStatusInstance.destroy();
    chartStatusInstance = new Chart(ctxStatus, {
      type: "doughnut",
      data: {
        labels: ["Watching", "Plan to Watch", "Completed", "Dropped"],
        datasets: [{
          data: [watching, plan, completed, dropped],
          backgroundColor: ["#9B83FF", "#60A5FA", "#63D6A2", "#FF5C5C"],
          borderWidth: 0,
          hoverOffset: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: { color: textColor, font: { family: "Plus Jakarta Sans", size: 11 } }
          }
        },
        cutout: "68%"
      }
    });
  }

  // 2. Chart: Media Type Breakdown
  const movies = titles.filter(t => t.type === "movie").length;
  const anime = titles.filter(t => t.type === "anime").length;
  const series = titles.filter(t => t.type === "series").length;

  const ctxType = document.getElementById("chartType");
  if (ctxType) {
    if (chartTypeInstance) chartTypeInstance.destroy();
    chartTypeInstance = new Chart(ctxType, {
      type: "doughnut",
      data: {
        labels: ["Anime", "Movies", "TV Series"],
        datasets: [{
          data: [anime, movies, series],
          backgroundColor: ["#B5A2FF", "#F5A623", "#818CF8"],
          borderWidth: 0,
          hoverOffset: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: { color: textColor, font: { family: "Plus Jakarta Sans", size: 11 } }
          }
        },
        cutout: "68%"
      }
    });
  }

  // 3. Chart: Top Genres
  const genreCounts = {};
  titles.forEach(t => {
    (t.genres || []).forEach(g => {
      const trimG = g.trim();
      if (trimG) {
        genreCounts[trimG] = (genreCounts[trimG] || 0) + 1;
      }
    });
  });
  const sortedGenres = Object.entries(genreCounts).sort((a, b) => b[1] - a[1]).slice(0, 6);
  const genreLabels = sortedGenres.map(x => x[0]);
  const genreData = sortedGenres.map(x => x[1]);

  const ctxGenre = document.getElementById("chartGenre");
  if (ctxGenre) {
    if (chartGenreInstance) chartGenreInstance.destroy();
    chartGenreInstance = new Chart(ctxGenre, {
      type: "bar",
      data: {
        labels: genreLabels.length > 0 ? genreLabels : ["Sci-Fi", "Action", "Shonen", "Drama"],
        datasets: [{
          label: "Titles",
          data: genreData.length > 0 ? genreData : [5, 4, 3, 3],
          backgroundColor: "#9B83FF",
          borderRadius: 6
        }]
      },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { grid: { color: gridColor }, ticks: { color: textColor, stepSize: 1 } },
          y: { grid: { display: false }, ticks: { color: textColor } }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  // 4. Chart: Rating Distribution
  const buckets = { "Under 7": 0, "7.0 - 7.9": 0, "8.0 - 8.9": 0, "9.0 - 9.5": 0, "9.6 - 10": 0 };
  titles.forEach(t => {
    const r = parseFloat(t.rating);
    if (!r) return;
    if (r < 7) buckets["Under 7"]++;
    else if (r < 8) buckets["7.0 - 7.9"]++;
    else if (r < 9) buckets["8.0 - 8.9"]++;
    else if (r < 9.6) buckets["9.0 - 9.5"]++;
    else buckets["9.6 - 10"]++;
  });

  const ctxRating = document.getElementById("chartRating");
  if (ctxRating) {
    if (chartRatingInstance) chartRatingInstance.destroy();
    chartRatingInstance = new Chart(ctxRating, {
      type: "bar",
      data: {
        labels: Object.keys(buckets),
        datasets: [{
          label: "Count",
          data: Object.values(buckets),
          backgroundColor: ["#6B7280", "#F5A623", "#60A5FA", "#9B83FF", "#63D6A2"],
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { grid: { color: gridColor }, ticks: { color: textColor, stepSize: 1 } },
          x: { grid: { display: false }, ticks: { color: textColor } }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  }
}

/* --------------------------------------------------------------------------
   CRUD Actions & Handlers
   -------------------------------------------------------------------------- */
function openAddModal(presetType = null, presetStatus = null) {
  const modal = document.getElementById("titleModal");
  const heading = document.getElementById("modalHeading");
  const form = document.getElementById("titleForm");
  if (!modal || !form) return;

  form.reset();
  document.getElementById("formTitleId").value = "";
  document.getElementById("formType").value = presetType || "anime";
  document.getElementById("formStatus").value = presetStatus || "plan";
  document.getElementById("formRating").value = "8.5";
  document.getElementById("formTotalEpisodes").value = "12";
  document.getElementById("formEpisodesWatched").value = "0";
  document.getElementById("formYear").value = new Date().getFullYear();
  document.getElementById("formPlatform").value = "Netflix";
  document.getElementById("formPoster").value = "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80";

  updateModalEpisodeLabels();
  checkDroppedReasonVisibility();

  heading.textContent = "Add Title to Library";
  modal.classList.remove("hidden");
}

function openEditModal(id) {
  const title = titles.find(t => t.id === id);
  if (!title) return;

  const modal = document.getElementById("titleModal");
  const heading = document.getElementById("modalHeading");
  if (!modal) return;

  document.getElementById("formTitleId").value = title.id;
  document.getElementById("formTitleName").value = title.title || "";
  document.getElementById("formType").value = title.type || "anime";
  document.getElementById("formStatus").value = title.status || "plan";
  document.getElementById("formYear").value = title.year || "";
  document.getElementById("formPlatform").value = title.platform || "Netflix";
  document.getElementById("formTotalEpisodes").value = title.totalEpisodes || "";
  document.getElementById("formEpisodesWatched").value = title.episodesWatched || 0;
  document.getElementById("formGenres").value = (title.genres || []).join(", ");
  document.getElementById("formPoster").value = title.poster || "";
  document.getElementById("formRating").value = title.rating || "";
  document.getElementById("formFavorite").checked = !!title.favorite;
  document.getElementById("formDroppedReason").value = title.droppedReason || "";
  document.getElementById("formNotes").value = title.notes || "";

  updateModalEpisodeLabels();
  checkDroppedReasonVisibility();

  heading.textContent = `Edit Title: ${title.title}`;
  modal.classList.remove("hidden");
}

function closeAddEditModal() {
  const modal = document.getElementById("titleModal");
  if (modal) modal.classList.add("hidden");
}

function handleSaveTitleForm(e) {
  e.preventDefault();
  const id = document.getElementById("formTitleId").value.trim();
  const name = document.getElementById("formTitleName").value.trim();
  if (!name) return;

  const type = document.getElementById("formType").value;
  const status = document.getElementById("formStatus").value;
  const year = parseInt(document.getElementById("formYear").value) || new Date().getFullYear();
  const platform = document.getElementById("formPlatform").value;
  const totalEpisodes = parseInt(document.getElementById("formTotalEpisodes").value) || 1;
  let episodesWatched = parseInt(document.getElementById("formEpisodesWatched").value) || 0;
  if (status === "completed") {
    episodesWatched = totalEpisodes;
  }

  const genres = document.getElementById("formGenres").value
    .split(",")
    .map(s => s.trim())
    .filter(s => s.length > 0);

  const poster = document.getElementById("formPoster").value.trim() || "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&auto=format&fit=crop&q=80";
  const rating = parseFloat(document.getElementById("formRating").value) || 0;
  const favorite = document.getElementById("formFavorite").checked;
  const droppedReason = document.getElementById("formDroppedReason").value.trim();
  const notes = document.getElementById("formNotes").value.trim();

  if (id) {
    const idx = titles.findIndex(t => t.id === id);
    if (idx !== -1) {
      titles[idx] = {
        ...titles[idx],
        title: name,
        type,
        status,
        year,
        platform,
        totalEpisodes,
        episodesWatched,
        genres,
        poster,
        rating,
        favorite,
        droppedReason,
        notes
      };
      showToast(`Updated "${name}"`, "success");
    }
  } else {
    const newTitle = {
      id: "ct-" + Date.now(),
      title: name,
      type,
      status,
      year,
      platform,
      totalEpisodes,
      episodesWatched,
      genres: genres.length > 0 ? genres : ["Entertainment"],
      poster,
      rating,
      favorite,
      droppedReason,
      notes,
      addedDate: new Date().toISOString().split("T")[0]
    };
    titles.unshift(newTitle);
    showToast(`Added "${name}" to library`, "success");
  }

  saveTitlesToStorage();
  populateGenreFilter();
  closeAddEditModal();
  renderCurrentView();

  if (id) openDetailModal(id);
}

function confirmDeleteTitle(id) {
  const item = titles.find(t => t.id === id);
  if (!item) return;

  openConfirmModal(
    "Delete Title",
    `Are you sure you want to permanently delete "${item.title}" from CineTrack? This cannot be undone.`,
    () => {
      titles = titles.filter(t => t.id !== id);
      saveTitlesToStorage();
      populateGenreFilter();
      showToast(`Deleted "${item.title}"`, "info");
      closeDetailModal();
      renderCurrentView();
    }
  );
}

function handleToggleFavorite(id) {
  const item = titles.find(t => t.id === id);
  if (!item) return;

  item.favorite = !item.favorite;
  saveTitlesToStorage();
  showToast(item.favorite ? `Favorited "${item.title}" ❤️` : `Removed "${item.title}" from favorites`, "info");
  renderCurrentView();

  const detailModal = document.getElementById("detailModal");
  if (detailModal && !detailModal.classList.contains("hidden")) {
    openDetailModal(id);
  }
}

function handleStepEpisode(id, delta) {
  const item = titles.find(t => t.id === id);
  if (!item) return;

  const total = item.totalEpisodes || 1;
  let current = (item.episodesWatched || 0) + delta;
  if (current < 0) current = 0;
  if (current > total) current = total;

  item.episodesWatched = current;

  if (current >= total && item.status !== "completed") {
    item.status = "completed";
    showToast(`🎉 Congratulations! Finished all episodes of "${item.title}"! Moved to Completed.`, "success");
  } else {
    showToast(`Updated "${item.title}" to episode ${current}/${total}`, "info");
  }

  saveTitlesToStorage();
  renderCurrentView();

  const detailModal = document.getElementById("detailModal");
  if (detailModal && !detailModal.classList.contains("hidden")) {
    openDetailModal(id);
  }
}

function handleQuickMoveStatus(id, newStatus) {
  const item = titles.find(t => t.id === id);
  if (!item) return;

  item.status = newStatus;
  if (newStatus === "completed") {
    item.episodesWatched = item.totalEpisodes;
  }
  saveTitlesToStorage();
  showToast(`Moved "${item.title}" to ${capitalizeFirst(newStatus)}`, "success");
  renderCurrentView();
}

/* --------------------------------------------------------------------------
   Detail View Modal
   -------------------------------------------------------------------------- */
function openDetailModal(id) {
  const item = titles.find(t => t.id === id);
  if (!item) return;

  const modal = document.getElementById("detailModal");
  if (!modal) return;

  document.getElementById("detailTitle").textContent = item.title;
  document.getElementById("detailRating").textContent = item.rating || "N/A";
  document.getElementById("detailTypeBadge").textContent = item.type;
  document.getElementById("detailStatusBadge").textContent = capitalizeFirst(item.status);
  document.getElementById("detailYear").textContent = item.year || "Unknown";
  document.getElementById("detailPlatform").textContent = item.platform || "Not specified";
  document.getElementById("detailGenres").textContent = (item.genres || []).join(", ") || "General";
  document.getElementById("detailNotes").textContent = item.notes ? `"${item.notes}"` : "No personal notes or review added yet.";

  const posterBg = document.getElementById("detailPosterBg");
  if (posterBg) {
    posterBg.style.backgroundImage = `url('${escapeHtml(item.poster)}')`;
  }

  const favBadge = document.getElementById("detailFavBadge");
  if (favBadge) {
    if (item.favorite) favBadge.classList.remove("hidden");
    else favBadge.classList.add("hidden");
  }

  const total = item.totalEpisodes || 1;
  const current = Math.min(item.episodesWatched || 0, total);
  const percent = Math.min(100, Math.round((current / total) * 100));

  const epLabel = document.getElementById("detailEpisodes");
  if (epLabel) {
    epLabel.textContent = item.type === "movie" ? `${total} min` : `${current} / ${total}`;
  }

  const pText = document.getElementById("detailProgressText");
  if (pText) pText.textContent = `${percent}%`;

  const pBar = document.getElementById("detailProgressBar");
  if (pBar) pBar.style.width = `${percent}%`;

  const decBtn = document.getElementById("detailDecEpisodeBtn");
  const incBtn = document.getElementById("detailIncEpisodeBtn");
  const markBtn = document.getElementById("detailMarkCompletedBtn");
  const editBtn = document.getElementById("detailEditBtn");
  const delBtn = document.getElementById("detailDeleteBtn");
  const toggleFavBtn = document.getElementById("detailToggleFavBtn");

  if (decBtn) decBtn.onclick = () => handleStepEpisode(item.id, -1);
  if (incBtn) incBtn.onclick = () => handleStepEpisode(item.id, 1);
  if (markBtn) markBtn.onclick = () => handleQuickMoveStatus(item.id, "completed");
  if (editBtn) editBtn.onclick = () => { closeDetailModal(); openEditModal(item.id); };
  if (delBtn) delBtn.onclick = () => confirmDeleteTitle(item.id);
  if (toggleFavBtn) toggleFavBtn.onclick = () => handleToggleFavorite(item.id);

  const droppedSec = document.getElementById("detailDroppedSection");
  const droppedReasonTxt = document.getElementById("detailDroppedReasonText");
  if (droppedSec && droppedReasonTxt) {
    if (item.status === "dropped" && item.droppedReason) {
      droppedSec.classList.remove("hidden");
      droppedReasonTxt.textContent = item.droppedReason;
    } else {
      droppedSec.classList.add("hidden");
    }
  }

  modal.classList.remove("hidden");
}

function closeDetailModal() {
  const modal = document.getElementById("detailModal");
  if (modal) modal.classList.add("hidden");
}

/* --------------------------------------------------------------------------
   Confirmation Dialog Modal (Replaces Canvas-unsafe native confirm)
   -------------------------------------------------------------------------- */
function openConfirmModal(heading, message, onConfirm) {
  const modal = document.getElementById("confirmModal");
  if (!modal) return;

  document.getElementById("confirmHeading").textContent = heading;
  document.getElementById("confirmMessage").textContent = message;
  onConfirmCallback = onConfirm;

  modal.classList.remove("hidden");
}

function closeConfirmModal() {
  const modal = document.getElementById("confirmModal");
  if (modal) modal.classList.add("hidden");
  onConfirmCallback = null;
}

/* --------------------------------------------------------------------------
   Backup & Data Export / Import (JSON)
   -------------------------------------------------------------------------- */
function openBackupModal() {
  const modal = document.getElementById("backupModal");
  if (modal) modal.classList.remove("hidden");
}

function closeBackupModal() {
  const modal = document.getElementById("backupModal");
  if (modal) modal.classList.add("hidden");
}

function handleDownloadJson() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(titles, null, 2));
  const downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `cinetrack_backup_${new Date().toISOString().split("T")[0]}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast("CineTrack backup downloaded successfully!", "success");
}

function handleCopyJson() {
  const jsonStr = JSON.stringify(titles, null, 2);
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(jsonStr).then(() => {
      showToast("JSON copied to clipboard!", "success");
    }).catch(() => {
      fallbackCopyText(jsonStr);
    });
  } else {
    fallbackCopyText(jsonStr);
  }
}

function fallbackCopyText(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand("copy");
    showToast("JSON copied to clipboard!", "success");
  } catch (err) {
    showToast("Unable to copy to clipboard", "error");
  }
  document.body.removeChild(textArea);
}

function handleApplyImport() {
  const textarea = document.getElementById("importJsonTextarea");
  if (!textarea) return;
  const raw = textarea.value.trim();
  if (!raw) {
    showToast("Please paste valid JSON data first", "error");
    return;
  }

  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      titles = parsed;
      saveTitlesToStorage();
      populateGenreFilter();
      closeBackupModal();
      showToast(`Successfully imported ${titles.length} titles!`, "success");
      renderCurrentView();
    } else {
      showToast("JSON must be an array of title objects", "error");
    }
  } catch (e) {
    showToast("Invalid JSON syntax: " + e.message, "error");
  }
}

function handleResetDefaults() {
  openConfirmModal(
    "Reset to Sample Data",
    "Are you sure you want to restore default sample titles? All current custom titles will be replaced.",
    () => {
      titles = JSON.parse(JSON.stringify(DEFAULT_TITLES));
      saveTitlesToStorage();
      populateGenreFilter();
      closeBackupModal();
      showToast("Reset to sample watchlist!", "info");
      renderCurrentView();
    }
  );
}

/* --------------------------------------------------------------------------
   Filter Dropdown Population & Helpers
   -------------------------------------------------------------------------- */
function populateGenreFilter() {
  const genreSelect = document.getElementById("filterGenre");
  if (!genreSelect) return;

  const genresSet = new Set();
  titles.forEach(t => {
    (t.genres || []).forEach(g => genresSet.add(g.trim()));
  });

  const currentVal = genreSelect.value;
  genreSelect.innerHTML = `<option value="all">All Genres</option>` + 
    Array.from(genresSet).sort().map(g => `<option value="${escapeHtml(g)}">${escapeHtml(g)}</option>`).join("");
  
  if (genresSet.has(currentVal)) {
    genreSelect.value = currentVal;
  }
}

function updateModalEpisodeLabels() {
  const type = document.getElementById("formType").value;
  const lblTotal = document.getElementById("labelTotalEpisodes");
  const lblWatched = document.getElementById("labelEpisodesWatched");
  const groupWatched = lblWatched ? lblWatched.parentElement : null;

  if (type === "movie") {
    if (lblTotal) lblTotal.textContent = "Runtime (Minutes)";
    if (groupWatched) groupWatched.classList.add("opacity-50");
  } else {
    if (lblTotal) lblTotal.textContent = "Total Episodes";
    if (groupWatched) groupWatched.classList.remove("opacity-50");
  }
}

function checkDroppedReasonVisibility() {
  const status = document.getElementById("formStatus").value;
  const group = document.getElementById("droppedReasonGroup");
  if (!group) return;
  if (status === "dropped") {
    group.classList.remove("hidden");
  } else {
    group.classList.add("hidden");
  }
}

function getStatusBadge(status) {
  if (status === "watching") {
    return `<span class="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-purple-500/20 text-brand-accent">Watching</span>`;
  } else if (status === "completed") {
    return `<span class="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-green-500/20 text-brand-success">Completed</span>`;
  } else if (status === "plan") {
    return `<span class="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500/20 text-blue-400">Plan to Watch</span>`;
  } else if (status === "dropped") {
    return `<span class="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-red-500/20 text-red-400">Dropped</span>`;
  }
  return `<span class="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-gray-500/20 text-gray-400">${escapeHtml(status)}</span>`;
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function capitalizeFirst(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/* --------------------------------------------------------------------------
   Toast Notifications
   -------------------------------------------------------------------------- */
function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "pointer-events-auto flex items-center space-x-3 px-4 py-3 rounded-2xl glass-panel shadow-2xl border text-xs font-semibold transform transition-all duration-300 translate-y-3 opacity-0 max-w-sm";
  toast.style.borderColor = "var(--border-color)";

  let icon = "fa-circle-info text-blue-400";
  if (type === "success") icon = "fa-circle-check text-brand-success";
  if (type === "error") icon = "fa-triangle-exclamation text-brand-danger";

  toast.innerHTML = `
    <i class="fa-solid ${icon} text-sm"></i>
    <span class="flex-1">${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove("translate-y-3", "opacity-0");
    toast.classList.add("translate-y-0", "opacity-100");
  });

  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-3");
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* --------------------------------------------------------------------------
   Mobile Sidebar Controls
   -------------------------------------------------------------------------- */
function toggleMobileSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebarOverlay");
  if (!sidebar || !overlay) return;

  const isHidden = sidebar.classList.contains("-translate-x-full");
  if (isHidden) {
    sidebar.classList.remove("-translate-x-full");
    overlay.classList.remove("hidden");
  } else {
    sidebar.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
  }
}

function closeMobileSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebarOverlay");
  if (sidebar) sidebar.classList.add("-translate-x-full");
  if (overlay) overlay.classList.add("hidden");
}

/* --------------------------------------------------------------------------
   DOM Event Listeners Binding
   -------------------------------------------------------------------------- */
function setupEventListeners() {
  // Sidebar Navigation clicks
  document.querySelectorAll(".nav-item").forEach(button => {
    button.addEventListener("click", () => {
      const view = button.dataset.view;
      if (view) switchView(view);
    });
  });

  // Quick switch buttons inside sections
  document.querySelectorAll(".view-switch-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.target;
      if (target) switchView(target);
    });
  });

  // Add Title with Presets buttons
  document.querySelectorAll(".add-title-preset-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const presetType = btn.dataset.presetType || null;
      const presetStatus = btn.dataset.presetStatus || null;
      openAddModal(presetType, presetStatus);
    });
  });

  // Quick Add Buttons
  const quickAddHeader = document.getElementById("headerQuickAddBtn");
  const quickAddSidebar = document.getElementById("sidebarQuickAddBtn");
  const quickAddMobile = document.getElementById("mobileQuickAddBtn");
  const quickAddHero = document.getElementById("heroAddBtn");
  const quickAddLib = document.getElementById("libraryAddNewBtn");
  const emptyStateAdd = document.getElementById("emptyStateAddBtn");

  if (quickAddHeader) quickAddHeader.addEventListener("click", () => openAddModal());
  if (quickAddSidebar) quickAddSidebar.addEventListener("click", () => openAddModal());
  if (quickAddMobile) quickAddMobile.addEventListener("click", () => openAddModal());
  if (quickAddHero) quickAddHero.addEventListener("click", () => openAddModal());
  if (quickAddLib) quickAddLib.addEventListener("click", () => openAddModal());
  if (emptyStateAdd) emptyStateAdd.addEventListener("click", () => openAddModal());

  // Theme toggle buttons
  const themeToggle = document.getElementById("themeToggleBtn");
  const mobileThemeToggle = document.getElementById("mobileThemeToggleBtn");
  if (themeToggle) themeToggle.addEventListener("click", toggleTheme);
  if (mobileThemeToggle) mobileThemeToggle.addEventListener("click", toggleTheme);

  // Mobile Menu
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const closeSidebarBtn = document.getElementById("closeSidebarBtn");
  const sidebarOverlay = document.getElementById("sidebarOverlay");
  if (mobileMenuBtn) mobileMenuBtn.addEventListener("click", toggleMobileSidebar);
  if (closeSidebarBtn) closeSidebarBtn.addEventListener("click", closeMobileSidebar);
  if (sidebarOverlay) sidebarOverlay.addEventListener("click", closeMobileSidebar);

  // Global Search Bar
  const searchInput = document.getElementById("globalSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      activeSearchQuery = e.target.value.trim();
      if (activeView !== "library") {
        switchView("library");
      } else {
        renderLibrary();
      }
    });
  }

  // Keyboard shortcut ⌘K or Ctrl+K for search
  window.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      if (searchInput) {
        searchInput.focus();
        searchInput.select();
      }
    }
  });

  // Clear Active Filter
  const clearFilterBtn = document.getElementById("clearActiveFilterBtn");
  if (clearFilterBtn) {
    clearFilterBtn.addEventListener("click", () => {
      activeTypeFilter = "all";
      activeStatusFilter = "all";
      activeGenreFilter = "all";
      activePlatformFilter = "all";
      activeSearchQuery = "";
      if (searchInput) searchInput.value = "";
      document.querySelectorAll(".type-filter-btn").forEach(b => {
        if (b.dataset.type === "all") b.classList.add("active");
        else b.classList.remove("active");
      });
      const fStatus = document.getElementById("filterStatus");
      const fGenre = document.getElementById("filterGenre");
      const fPlat = document.getElementById("filterPlatform");
      if (fStatus) fStatus.value = "all";
      if (fGenre) fGenre.value = "all";
      if (fPlat) fPlat.value = "all";
      renderLibrary();
    });
  }

  // Type Filter Buttons (Library)
  document.querySelectorAll(".type-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".type-filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeTypeFilter = btn.dataset.type || "all";
      renderLibrary();
    });
  });

  // Grid / List View Toggle
  const gridBtn = document.getElementById("viewGridBtn");
  const listBtn = document.getElementById("viewListBtn");
  if (gridBtn && listBtn) {
    gridBtn.addEventListener("click", () => {
      isListView = false;
      gridBtn.classList.add("active", "text-brand-accent");
      listBtn.classList.remove("active", "text-brand-accent");
      renderLibrary();
    });
    listBtn.addEventListener("click", () => {
      isListView = true;
      listBtn.classList.add("active", "text-brand-accent");
      gridBtn.classList.remove("active", "text-brand-accent");
      renderLibrary();
    });
  }

  // Dropdown Filters
  const fStatus = document.getElementById("filterStatus");
  const fGenre = document.getElementById("filterGenre");
  const fPlatform = document.getElementById("filterPlatform");
  const sSort = document.getElementById("sortBy");

  if (fStatus) fStatus.addEventListener("change", (e) => { activeStatusFilter = e.target.value; renderLibrary(); });
  if (fGenre) fGenre.addEventListener("change", (e) => { activeGenreFilter = e.target.value; renderLibrary(); });
  if (fPlatform) fPlatform.addEventListener("change", (e) => { activePlatformFilter = e.target.value; renderLibrary(); });
  if (sSort) sSort.addEventListener("change", (e) => { activeSort = e.target.value; renderLibrary(); });

  // Title Add/Edit Form submission
  const titleForm = document.getElementById("titleForm");
  if (titleForm) titleForm.addEventListener("submit", handleSaveTitleForm);

  const closeTitleModalBtn = document.getElementById("closeTitleModalBtn");
  const cancelTitleModalBtn = document.getElementById("cancelTitleModalBtn");
  const titleModalBackdrop = document.getElementById("titleModalBackdrop");
  if (closeTitleModalBtn) closeTitleModalBtn.addEventListener("click", closeAddEditModal);
  if (cancelTitleModalBtn) cancelTitleModalBtn.addEventListener("click", closeAddEditModal);
  if (titleModalBackdrop) titleModalBackdrop.addEventListener("click", closeAddEditModal);

  // Form dynamic type change & status change
  const formType = document.getElementById("formType");
  const formStatus = document.getElementById("formStatus");
  if (formType) formType.addEventListener("change", updateModalEpisodeLabels);
  if (formStatus) formStatus.addEventListener("change", checkDroppedReasonVisibility);

  // Preset poster image buttons
  document.querySelectorAll(".preset-poster-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const url = btn.dataset.url;
      const posterInput = document.getElementById("formPoster");
      if (posterInput && url) posterInput.value = url;
    });
  });

  // Detail Modal close
  const closeDetailModalBtn = document.getElementById("closeDetailModalBtn");
  const detailModalBackdrop = document.getElementById("detailModalBackdrop");
  if (closeDetailModalBtn) closeDetailModalBtn.addEventListener("click", closeDetailModal);
  if (detailModalBackdrop) detailModalBackdrop.addEventListener("click", closeDetailModal);

  // Confirmation Modal buttons
  const confirmActionBtn = document.getElementById("confirmActionBtn");
  const confirmCancelBtn = document.getElementById("confirmCancelBtn");
  const confirmBackdrop = document.getElementById("confirmBackdrop");
  if (confirmActionBtn) {
    confirmActionBtn.addEventListener("click", () => {
      if (typeof onConfirmCallback === "function") {
        onConfirmCallback();
      }
      closeConfirmModal();
    });
  }
  if (confirmCancelBtn) confirmCancelBtn.addEventListener("click", closeConfirmModal);
  if (confirmBackdrop) confirmBackdrop.addEventListener("click", closeConfirmModal);

  // Backup & Restore Modal buttons
  const openBackupBtn = document.getElementById("openBackupBtn");
  const closeBackupModalBtn = document.getElementById("closeBackupModalBtn");
  const backupBackdrop = document.getElementById("backupBackdrop");
  const downloadJsonBtn = document.getElementById("downloadJsonBtn");
  const copyJsonBtn = document.getElementById("copyJsonBtn");
  const applyImportBtn = document.getElementById("applyImportBtn");
  const resetDefaultsBtn = document.getElementById("resetDefaultsBtn");

  if (openBackupBtn) openBackupBtn.addEventListener("click", openBackupModal);
  if (closeBackupModalBtn) closeBackupModalBtn.addEventListener("click", closeBackupModal);
  if (backupBackdrop) backupBackdrop.addEventListener("click", closeBackupModal);
  if (downloadJsonBtn) downloadJsonBtn.addEventListener("click", handleDownloadJson);
  if (copyJsonBtn) copyJsonBtn.addEventListener("click", handleCopyJson);
  if (applyImportBtn) applyImportBtn.addEventListener("click", handleApplyImport);
  if (resetDefaultsBtn) resetDefaultsBtn.addEventListener("click", handleResetDefaults);
}

// Start App on Window Load
window.addEventListener("DOMContentLoaded", initApp);
