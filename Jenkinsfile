pipeline {
    agent any
    environment {
        BUILD_VERSION = "1.${env.BUILD_NUMBER}-${env.GIT_BRANCH.replaceAll("/", "-")}"
    }
    stages {
        stage('Install') {
            steps {
                sh 'yarn install'
            }
        }
        stage('Test') {
            steps {
                sh 'yarn lerna run test'
            }
        }
        stage('Build') {
            steps {
                sh 'yarn lerna run build'
            }
        }
    }
}
