# Etapa 1: Construcción con Maven
FROM maven:3.8.5-openjdk-17 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
# Compilamos saltando los tests para que el pipeline sea más rápido
RUN mvn clean package -DskipTests 

# Etapa 2: Ejecución con Java
FROM openjdk:17-jdk-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]