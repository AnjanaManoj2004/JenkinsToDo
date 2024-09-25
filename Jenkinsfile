pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                // Create the 'output' directory only if it doesn't exist
                bat 'if not exist output (mkdir output)'  // Create the 'output' directory
                bat 'xcopy /E /I * output\\'  // Use xcopy to copy files to the 'output' directory
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
