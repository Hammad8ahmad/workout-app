# Stage 1: Base image with only JRE (for minimal final image)
FROM eclipse-temurin:21-jre-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the JAR file from your local build
COPY target/backend-0.0.1-SNAPSHOT.jar app.jar

# Expose the application port (for documentation only, actual port is mapped in docker-compose)
EXPOSE 8080

# Default command (redundant since you defined `command:` in docker-compose, but good for Docker run)
CMD ["java", "-jar", "/app/app.jar"]

