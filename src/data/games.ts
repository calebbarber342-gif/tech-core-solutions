export type Category = "action" | "puzzle" | "racing" | "sports" | "shooting" | "adventure" | "io" | "classic";

export interface Game {
  id: string;
  title: string;
  category: Category;
  description: string;
  thumbnail: string;
  url: string;
  featured?: boolean;
  hot?: boolean;
  new?: boolean;
}

export const CATEGORIES: { id: Category; label: string; emoji: string; color: string }[] = [
  { id: "action",    label: "Action",    emoji: "⚔️",  color: "text-red-400 bg-red-900/30 border-red-800" },
  { id: "puzzle",    label: "Puzzle",    emoji: "🧩",  color: "text-purple-400 bg-purple-900/30 border-purple-800" },
  { id: "racing",    label: "Racing",    emoji: "🏎️",  color: "text-yellow-400 bg-yellow-900/30 border-yellow-800" },
  { id: "sports",    label: "Sports",    emoji: "⚽",  color: "text-green-400 bg-green-900/30 border-green-800" },
  { id: "shooting",  label: "Shooting",  emoji: "🎯",  color: "text-orange-400 bg-orange-900/30 border-orange-800" },
  { id: "adventure", label: "Adventure", emoji: "🗺️",  color: "text-cyan-400 bg-cyan-900/30 border-cyan-800" },
  { id: "io",        label: ".io Games", emoji: "🌐",  color: "text-pink-400 bg-pink-900/30 border-pink-800" },
  { id: "classic",   label: "Classic",   emoji: "👾",  color: "text-blue-400 bg-blue-900/30 border-blue-800" },
];

// Thumbnails use a placeholder service — swap with real thumbnails later
const thumb = (id: number) => `https://picsum.photos/seed/${id}/320/180`;

export const GAMES: Game[] = [
  // ── ACTION ──
  { id: "bullet-force",     title: "Bullet Force",       category: "action",    description: "First-person multiplayer shooter with realistic graphics.",             thumbnail: thumb(10),  url: "https://www.crazygames.com/embed/bullet-force-multiplayer", featured: true, hot: true },
  { id: "venge",            title: "Venge.io",           category: "action",    description: "Fast-paced FPS with multiple maps and weapons.",                        thumbnail: thumb(11),  url: "https://venge.io/" },
  { id: "krunker",          title: "Krunker.io",         category: "action",    description: "Blocky fast-paced FPS browser game.",                                   thumbnail: thumb(12),  url: "https://krunker.io/", hot: true },
  { id: "combat-reloaded",  title: "Combat Reloaded",    category: "action",    description: "Classic FPS with multiple game modes.",                                 thumbnail: thumb(13),  url: "https://www.crazygames.com/embed/combat-reloaded" },
  { id: "warbrokers",       title: "War Brokers",        category: "action",    description: "Multiplayer voxel FPS with vehicles.",                                  thumbnail: thumb(14),  url: "https://warbrokers.io/" },
  { id: "zombs-royale",     title: "Zombs Royale",       category: "action",    description: "2D battle royale — 100 players, last one standing wins.",               thumbnail: thumb(15),  url: "https://zombsroyale.io/", new: true },

  // ── PUZZLE ──
  { id: "2048",             title: "2048",               category: "puzzle",    description: "Slide tiles to combine numbers and reach 2048.",                        thumbnail: thumb(20),  url: "https://play2048.co/", featured: true },
  { id: "sudoku",           title: "Sudoku",             category: "puzzle",    description: "Classic number puzzle — fill the grid with 1-9.",                      thumbnail: thumb(21),  url: "https://sudoku.com/" },
  { id: "tetris",           title: "Tetris",             category: "puzzle",    description: "The original block stacking puzzle game.",                              thumbnail: thumb(22),  url: "https://tetris.com/play-tetris", hot: true },
  { id: "wordle",           title: "Wordle",             category: "puzzle",    description: "Guess the 5-letter word in 6 tries.",                                   thumbnail: thumb(23),  url: "https://www.nytimes.com/games/wordle/index.html" },
  { id: "cut-the-rope",     title: "Cut the Rope",       category: "puzzle",    description: "Feed candy to Om Nom by cutting ropes.",                               thumbnail: thumb(24),  url: "https://www.crazygames.com/embed/cut-the-rope-remastered" },
  { id: "bloons-td",        title: "Bloons Tower Defense", category: "puzzle",  description: "Pop balloons before they reach the end.",                               thumbnail: thumb(25),  url: "https://www.crazygames.com/embed/bloons-tower-defense-5" },

  // ── RACING ──
  { id: "madalin-cars",     title: "Madalin Cars Multi", category: "racing",    description: "Multiplayer stunt racing with exotic cars.",                            thumbnail: thumb(30),  url: "https://www.crazygames.com/embed/madalin-cars-multiplayer", featured: true, hot: true },
  { id: "road-fury",        title: "Road Fury",          category: "racing",    description: "Destroy enemies on the highway in this top-down racer.",               thumbnail: thumb(31),  url: "https://www.crazygames.com/embed/road-fury" },
  { id: "drift-boss",       title: "Drift Boss",         category: "racing",    description: "Tap to drift — how far can you go?",                                   thumbnail: thumb(32),  url: "https://www.crazygames.com/embed/drift-boss" },
  { id: "parking-fury",     title: "Parking Fury",       category: "racing",    description: "Park your car without crashing.",                                       thumbnail: thumb(33),  url: "https://www.crazygames.com/embed/parking-fury-3d-night-thief" },
  { id: "burnout-drift",    title: "Burnout Drift",      category: "racing",    description: "Realistic drift simulator.",                                            thumbnail: thumb(34),  url: "https://www.crazygames.com/embed/burnout-drift-seaport" },
  { id: "moto-x3m",         title: "Moto X3M",           category: "racing",    description: "Crazy motorcycle obstacle course.",                                     thumbnail: thumb(35),  url: "https://www.crazygames.com/embed/moto-x3m", new: true },

  // ── SPORTS ──
  { id: "basketball-stars", title: "Basketball Stars",   category: "sports",    description: "1v1 basketball with real players.",                                     thumbnail: thumb(40),  url: "https://www.crazygames.com/embed/basketball-stars", featured: true },
  { id: "soccer-skills",    title: "Soccer Skills",      category: "sports",    description: "Dribble past defenders and score goals.",                               thumbnail: thumb(41),  url: "https://www.crazygames.com/embed/soccer-skills-world-cup" },
  { id: "ping-pong",        title: "Ping Pong",          category: "sports",    description: "Classic table tennis against AI or a friend.",                          thumbnail: thumb(42),  url: "https://www.crazygames.com/embed/ping-pong" },
  { id: "mini-golf",        title: "Mini Golf",          category: "sports",    description: "18 holes of miniature golf.",                                           thumbnail: thumb(43),  url: "https://www.crazygames.com/embed/mini-golf-club" },
  { id: "boxing-random",    title: "Boxing Random",      category: "sports",    description: "Ragdoll boxing — anything can happen.",                                 thumbnail: thumb(44),  url: "https://www.crazygames.com/embed/boxing-random", hot: true },
  { id: "dunk-shot",        title: "Dunk Shot",          category: "sports",    description: "Flick the ball into the basket.",                                       thumbnail: thumb(45),  url: "https://www.crazygames.com/embed/dunk-shot" },

  // ── SHOOTING ──
  { id: "shellshock",       title: "ShellShock.io",      category: "shooting",  description: "Multiplayer egg shooter — hatch and battle.",                           thumbnail: thumb(50),  url: "https://shellshock.io/", hot: true },
  { id: "zombie-shooter",   title: "Zombie Shooter",     category: "shooting",  description: "Survive waves of zombies.",                                             thumbnail: thumb(51),  url: "https://www.crazygames.com/embed/zombie-shooter-survival" },
  { id: "narrow-one",       title: "Narrow.One",         category: "shooting",  description: "Medieval archery multiplayer game.",                                    thumbnail: thumb(52),  url: "https://narrow.one/", new: true },
  { id: "stickman-archer",  title: "Stickman Archer",    category: "shooting",  description: "Precise archery with stickman physics.",                                thumbnail: thumb(53),  url: "https://www.crazygames.com/embed/stickman-archer-2" },
  { id: "pixel-shooter",    title: "Pixel Shooter",      category: "shooting",  description: "Retro pixel art multiplayer shooter.",                                  thumbnail: thumb(54),  url: "https://www.crazygames.com/embed/pixel-shooter" },
  { id: "gun-mayhem",       title: "Gun Mayhem",         category: "shooting",  description: "Platform shooter — knock enemies off the stage.",                       thumbnail: thumb(55),  url: "https://www.crazygames.com/embed/gun-mayhem-redux" },

  // ── ADVENTURE ──
  { id: "fireboy-watergirl", title: "Fireboy & Watergirl", category: "adventure", description: "Co-op puzzle platformer — work together to reach the exit.",          thumbnail: thumb(60),  url: "https://www.crazygames.com/embed/fireboy-and-watergirl-1-in-the-forest-temple", featured: true },
  { id: "getaway-shootout",  title: "Getaway Shootout",   category: "adventure", description: "Race to the getaway vehicle in this chaotic multiplayer game.",        thumbnail: thumb(61),  url: "https://www.crazygames.com/embed/getaway-shootout", hot: true },
  { id: "vex-5",             title: "Vex 5",              category: "adventure", description: "Challenging stickman platformer with traps.",                          thumbnail: thumb(62),  url: "https://www.crazygames.com/embed/vex-5" },
  { id: "color-tunnel",      title: "Color Tunnel",       category: "adventure", description: "Dodge colored obstacles in this endless tunnel runner.",               thumbnail: thumb(63),  url: "https://www.crazygames.com/embed/color-tunnel" },
  { id: "idle-breakout",     title: "Idle Breakout",      category: "adventure", description: "Idle clicker meets brick breaker.",                                    thumbnail: thumb(64),  url: "https://www.crazygames.com/embed/idle-breakout" },
  { id: "temple-run",        title: "Temple Run",         category: "adventure", description: "Run, jump and slide to escape the temple.",                            thumbnail: thumb(65),  url: "https://www.crazygames.com/embed/temple-run-2", new: true },

  // ── .IO ──
  { id: "agar-io",          title: "Agar.io",            category: "io",        description: "Eat smaller cells to grow — don't get eaten.",                         thumbnail: thumb(70),  url: "https://agar.io/", featured: true, hot: true },
  { id: "slither-io",       title: "Slither.io",         category: "io",        description: "Grow your snake by eating glowing orbs.",                              thumbnail: thumb(71),  url: "https://slither.io/" },
  { id: "diep-io",          title: "Diep.io",            category: "io",        description: "Tank battle — destroy shapes and players to level up.",                 thumbnail: thumb(72),  url: "https://diep.io/" },
  { id: "paper-io",         title: "Paper.io 2",         category: "io",        description: "Capture territory without getting cut off.",                           thumbnail: thumb(73),  url: "https://paper-io.com/" },
  { id: "surviv-io",        title: "Surviv.io",          category: "io",        description: "2D battle royale — loot up and be the last one alive.",                thumbnail: thumb(74),  url: "https://survivio.com/" },
  { id: "hole-io",          title: "Hole.io",            category: "io",        description: "Swallow everything in sight to become the biggest hole.",              thumbnail: thumb(75),  url: "https://hole-io.com/", new: true },

  // ── CLASSIC ──
  { id: "pacman",           title: "Pac-Man",            category: "classic",   description: "The original arcade legend — eat dots, dodge ghosts.",                 thumbnail: thumb(80),  url: "https://www.google.com/logos/2010/pacman10-i.html", featured: true },
  { id: "snake",            title: "Snake",              category: "classic",   description: "Eat apples to grow — don't hit the walls or yourself.",                thumbnail: thumb(81),  url: "https://www.crazygames.com/embed/nokia-snake" },
  { id: "space-invaders",   title: "Space Invaders",     category: "classic",   description: "Shoot the alien invaders before they reach Earth.",                    thumbnail: thumb(82),  url: "https://www.crazygames.com/embed/space-invaders" },
  { id: "asteroids",        title: "Asteroids",          category: "classic",   description: "Blast asteroids and UFOs in deep space.",                              thumbnail: thumb(83),  url: "https://www.crazygames.com/embed/asteroids" },
  { id: "breakout",         title: "Breakout",           category: "classic",   description: "Break all the bricks with your bouncing ball.",                        thumbnail: thumb(84),  url: "https://www.crazygames.com/embed/breakout" },
  { id: "minesweeper",      title: "Minesweeper",        category: "classic",   description: "Clear the minefield without triggering a bomb.",                       thumbnail: thumb(85),  url: "https://minesweeper.online/", hot: true },
];
