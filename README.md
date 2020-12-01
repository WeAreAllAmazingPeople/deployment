# big-picture-2

📄 https://docs.google.com/presentation/d/1VDDYATWkaIZR6ySC-hcuJ8TNwDeO8Ro6diDl2z3sa5s/edit?usp=sharing

🐱‍💻 ??

In this second edition of the Bigger Picture™, we'll explore a new project: The Switchfully Secret Manager

1 git repository, 2 sub folders
* frontend
* backend

## From Concept 🌍 to Cloud ☁️ (or server 💻)
1. We start from the concept
1. The concept will be transformed in a technical drawing
1. We'll define the contract (the API)
1. We'll transform it technically into a Spring Boot project
1. And in a Angular project

When a first draft of the project (an MVP) is ready, we'll deploy the backend to Heroku & the frontend to Netlify (But this is not for today)

## Idea challenge 💡
Draft your own idea, paper only! 📝

## Tools
### Mockup
https://balsamiq.com/

### Technical diagram
www.diagrams.net (formerly draw.io)

## Technical
### Cors
```java
@Configuration
public class WebConfiguration implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:4200")
                .allowedMethods("*");
    }
}
```
### Angular documentation (beyond ToH)
* https://angular.io/guide/forms
* https://angular.io/guide/router-tutorial
* https://www.baeldung.com/spring-boot-angular-web