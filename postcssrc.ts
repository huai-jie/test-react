import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import tailwindcss from 'tailwindcss';

const isProduction = process.env.NODE_ENV === 'production';

const postcssConfig =  {
  plugins: [
    tailwindcss,
    autoprefixer,
    cssnano({
      preset: isProduction ? 'advanced' : 'default',
    }),
  ],
};

export default postcssConfig;