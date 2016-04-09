module.exports = function(grunt){
    'use strict';

    // CONFIGURAÇÕES iniciais do grunt e plugins
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // configuração dos plugins

        uglify: {
            my_target: {
                files: {
                    'js/init.min.js': ['js/init.js']
                }
            }
        },

        cssmin: {
            dist: {
                files: {
                    'css/app.min.css': ['css/app.css']
                }
            }
        }

    });

    // CARREGAMENTO das tarefas NPM
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // ...

    // TAREFAS CUSTOMIZADAS
    grunt.registerTask('preparaAppCarros', [ 'uglify','cssmin' ]);//TODO CONTRUIR A TAREFA DE EMPACOTAMENTO PARA DEPLOY

    //TODO REGISTRAR A TAREFA DE EXECUÇÃO DOS TESTES UNITÁRIOS
    // ...

};