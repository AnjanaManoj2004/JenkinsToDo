pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                bat 'mkdir dist'  // Create the 'dist' directory
                bat 'xcopy /E /I * dist\\'  // Use xcopy to copy files to the 'dist' directory
            }
        }
    }        

    post {
        success {
            echo 'Build was successful!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
