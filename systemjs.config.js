(function(global) {
    // map tells the System loader where to look for things
    var map = {
        'app': 'src', // 'dist',
        'rxjs': 'node_modules/rxjs',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        '@angular': 'node_modules/@angular',
        'angular2-modal': 'node_modules/angular2-modal',
        'ng2-cookies': 'node_modules/ng2-cookies'
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': {
            main: 'app.js',
            defaultExtension: 'js'
        },
        'rxjs': {
            defaultExtension: 'js'
        },
        'angular2-in-memory-web-api': {
            defaultExtension: 'js'
        },
        'ng2-cookies': {
            main: 'ng2-cookies.js',
            defaultExtension: 'js'
        }
    };
    var packageNames = [
        '@angular/core',
        '@angular/http',
        '@angular/compiler',
        '@angular/platform-browser-dynamic',
        '@angular/platform-browser',
        '@angular/router',
        '@angular/router-deprecated',
        '@angular/common',
        '@angular/testing',
        '@angular/upgrade',
        'angular2-modal',
        'angular2-modal/platform-browser',
        'angular2-modal/plugins/bootstrap'
    ];
    // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    packageNames.forEach(function(pkgName) {
        packages[pkgName] = {
            main: 'index.js',
            defaultExtension: 'js'
        };
    });
    var config = {
        map: map,
        packages: packages
    }
    System.config(config);
})(this);
