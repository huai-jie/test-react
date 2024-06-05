import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import postcssConfig from './postcssrc';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  process.env.NODE_ENV = mode;
  return {
    // vite config
    plugins: [react()],
    css: {
      postcss: postcssConfig
    },
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
  }
})