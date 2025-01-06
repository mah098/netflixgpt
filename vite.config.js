import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: true, // Ensure this is set to true or left as default
    // If using a custom port, ensure it's open for HMR
    // hmr: { port: 3000 },
  },
});
