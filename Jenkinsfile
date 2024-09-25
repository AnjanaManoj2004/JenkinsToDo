pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                bat 'if not exist output (mkdir output)' // Create the 'output' directory if it doesn't exist
                bat 'xcopy /E /I /EXCLUDE:output\\* * output\\' // Exclude the output directory while copying
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
