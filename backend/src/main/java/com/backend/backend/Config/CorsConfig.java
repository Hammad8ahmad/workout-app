package com.backend.backend.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration  // tells Spring this is a configuration class
public class CorsConfig {
    @Bean  // makes this CORS config available to the app
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")  // apply to all paths
                        .allowedOrigins("http://localhost:3000","https://workout-app-hammad8ahmads-projects.vercel.app/")  // allow your frontend
                        .allowedMethods("GET", "POST", "PUT", "DELETE")
                        .allowCredentials(true);  // if using cookies or auth headers
            }
        };
    }
}
