var gulp         = require('gulp');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber 	 = require('gulp-plumber');

// Sass options
var sassOptions = {
	src  : 'scss/**/*.scss',
	dest : 'css',
};

// Autoprefixer options
var autoprefixerOptions = {
	browsers : ['last 4 versions', '> 0.2%', 'Firefox ESR']
};

// Sass compilation
gulp.task('sass', function () {
  return gulp
    .src(sassOptions.src)
	.pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(sassOptions.dest));
});

// Watch
gulp.task('watch', ['sass'], function() {
	gulp.watch(sassOptions.src, ['sass']);
});


gulp.task('default', ['watch']);