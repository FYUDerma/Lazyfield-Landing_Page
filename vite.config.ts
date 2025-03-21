import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: '/Lazyfield-Landing_Page/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Add this line to resolve '@' to the 'src' directory
    },
  },
});
