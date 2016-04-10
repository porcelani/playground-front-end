module.exports = function(grunt){
    'use strict';

    // CONFIGURAÇÕES iniciais do grunt e plugins
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // configuração dos plugins

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
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    // ...

    // TAREFAS CUSTOMIZADAS

    //TODO REGISTRAR A TAREFA DE EXECUÇÃO DOS TESTES UNITÁRIOS
    grunt.registerTask('preparaAppCarros', [ 'uglify','cssmin','htmlmin','copy' ]);//TODO CONTRUIR A TAREFA DE EMPACOTAMENTO PARA DEPLOY
    //TODO REGISTRAR A TAREFA DE EXECUÇÃO DOS TESTES DE INTEGRAÇÃO

    // ...

};