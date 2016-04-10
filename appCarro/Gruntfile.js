module.exports = function(grunt){
    'use strict';

    // CONFIGURAÇÕES INICIAIS DO GRUNT
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // CONFIGURAÇÃO DOS PLUGINS
        jasmine: {
            pivotal: {
                src: 'src/**/*.js',
                options: {
                    specs: 'spec/*Spec.js',
                    helpers: 'spec/*Helper.js'
                }
            }
        },

        uglify: {
            my_target: {
                options: {
                    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */'
                },
                files: [{
                    expand: true,
                    cwd: 'src/js',
                    src: '**/*.js',
                    dest: 'dist/js'
                }]
            }
        },

        cssmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/css',
                    src: '**/*.css',
                    dest: 'dist/css'
                }]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: '*.html',
                    dest: 'dist'
                }]
            }

        },

        copy: {
            main: {
                files: [
                    {expand: true,
                        cwd: 'src/lib/bootstrap/dist/css/',
                        src: '**',
                        dest: 'dist/lib/bootstrap/dist/css/'},

                    {expand: true,
                        cwd: 'src/lib/jquery/dist/',
                        src: '**',
                        dest: 'dist/lib/jquery/dist/'}
                ]
            }
        }

    });

    // CARREGAMENTO das tarefas NPM
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // TAREFAS CUSTOMIZADAS
    grunt.registerTask('install', [
        'jasmine',                              //Unit test
        'uglify','cssmin','htmlmin','copy'      //Build
        //TODO REGISTRAR A TAREFA DE EXECUÇÃO DOS TESTES DE INTEGRAÇÃO
    ]);

};