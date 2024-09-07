import scanner from "sonarqube-scanner";

scanner.default({
    options: {
        "sonar.projectKey": "movie-backend-express",
        "sonar.sources": "src",
        // "sonar.tests": "tests",
        // "sonar.javascript.lcov.reportPaths": "coverage/lcov.info",
        // "sonar.exclusions": "dist/**",
        // "sonar.coverage.exclusions": "**/*.test.*",
    }
}, () => {})