import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: `/my-portfolio-frontend`,
   server: {
     port: 8080,
    host: "192.168.1.21",
   },
});
