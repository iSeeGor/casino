module.exports = function () {
    $.gulp.task('browser-sync', () => {

        $.browserSync.init({
            // server: {
            //     baseDir: './build/' 
            // },

            proxy: 'http://firstcasinohtml.loc/',
            notify: false,
            online: true
        });

    });
}