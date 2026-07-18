// Script to add .gitkeep files to all empty directories
// so git tracks them and team members don't have to recreate the folder structure

const fs = require("fs");
const path = require("path");

// Directories to skip (these are never committed to git)
const SKIP = new Set([
  "node_modules",
  ".next",
  ".git",
  "dist",
  "build",
  ".turbo",
  "coverage",
  ".cache",
]);

// Walk directory tree and add .gitkeep to empty folders
function walkAndAddGitkeep(dir) {
  let entries;
  try {
    entries = fs.readdirSync(dir);
  } catch {
    return;
  }

  // Filter out skipped dirs
  const visible = entries.filter((e) => !SKIP.has(e) && !e.startsWith(".cache"));

  // If directory is empty (or only has .gitkeep already), add .gitkeep
  const nonGitkeep = visible.filter((e) => e !== ".gitkeep");

  if (nonGitkeep.length === 0) {
    // Empty dir — add .gitkeep
    const keepPath = path.join(dir, ".gitkeep");
    if (!fs.existsSync(keepPath)) {
      fs.writeFileSync(keepPath, "# This file keeps the folder tracked by git\n");
      console.log("Added .gitkeep to:", dir);
    }
    return;
  }

  // Recurse into subdirectories
  for (const entry of visible) {
    const full = path.join(dir, entry);
    try {
      const stat = fs.statSync(full);
      if (stat.isDirectory() && !SKIP.has(entry)) {
        walkAndAddGitkeep(full);
      }
    } catch {
      // ignore
    }
  }
}

walkAndAddGitkeep(path.resolve(__dirname));
console.log("Done! All empty directories now have .gitkeep files.");
