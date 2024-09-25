pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Change the Node.js version to 20
                    def nodeHome = tool name: 'NodeJS 20', type: 'NodeJSInstallation'
                    env.PATH = "${nodeHome}\\bin;${env.PATH}" // Update PATH for Windows

                    // Run your build commands here
                    bat 'npm install' // Example command
                }
            }
        }
    }
}
