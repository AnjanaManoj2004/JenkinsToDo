pipeline {
    agent any 
    stages {
        stage('Checkout') {
            steps {
                // Checkout code from Git
                checkout scm
            }
        }

        stage('Build') {
            steps {
                // Build your application here
                dir('C:\\Users\\ANJANA MANOJ\\Desktop\\JenkinsHD\\HDJenkins\\JenkinsToDo') { // use the same subfolder for the build step if needed
                    bat 'current project build' // replace with your build command
                }
            }
        }
    }
    post {
        always {
            echo 'This always runs!'
        }
        failure {
            echo 'Build failed.'
        }
    }
}
