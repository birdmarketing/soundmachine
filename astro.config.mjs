import { defineConfig } from "astro/config";

// Staging build for the SoundMachine redesign.
// URLs mirror the live sound-machine.com structure exactly: no trailing slashes,
// e.g. /how-it-works and /licensing/united-states.
export default defineConfig({
  site: "https://soundmachine.bird.co.uk",
  output: "static",
  trailingSlash: "never",
  build: { format: "file", inlineStylesheets: "auto" },
  devToolbar: { enabled: false },
});
