import gulp from 'gulp';
import config from './gulp/config.js';
import { clean, server, htmlBuild, htmlWatch, stylesBuild, stylesWatch } from './gulp/tasks/index.js';

config.setEnv();

export const build = gulp.series(clean, gulp.parallel(htmlBuild, stylesBuild));

export const watch = gulp.series(build, gulp.parallel(server, htmlWatch, stylesWatch));