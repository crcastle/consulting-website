import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import UnpluginInjectPreload from 'unplugin-inject-preload/vite'
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      ViteImageOptimizer({
        /* pass your config */
      }),
      UnpluginInjectPreload({
        files: [
          {
            entryMatch: /PermanentMarker.woff2$/,
          },
          {
            outputMatch: /lazy.[a-z-0-9]*.(css|js)$/,
          },
        ],
      }),
    ],
  };
});
