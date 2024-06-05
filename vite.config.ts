import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite config
    plugins: [react()],
    css: {
      postcss: {
        plugins: [
          autoprefixer,
          cssnano({
            preset: 'default',
          }),
        ],
      },
    },
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
  }
})