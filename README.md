#  Train Log – Workout Tracker App

Track, view, and manage your workouts with ease. Built with a modern **React frontend**, **Spring Boot backend**, and **PostgreSQL** for data storage. Fully deployed with **Vercel (frontend)** and **AWS EC2 (backend)**.



##  Live Demo

[Demo](https://my-train-log.vercel.app/)


##  Screenshots

[Home](images/workout.png)

[Total workouts](images/total-workouts.png)

## Tech Stack

### Frontend
- React (CRA)
- CSS
- React Router
- Date-fns
- Deployed via Vercel

### Backend
- Spring Boot 
- Spring Data JPA
- PostgreSQL (Dockerized)
- Deployed on AWS EC2 using Docker

---

##  Features

-  Add new workouts
-  View all workouts with date & details
-  Edit or delete any workout
-  Total workout counter
-  Dark mode support
-  Full REST API with Spring Boot
-  Responsive for mobile and desktop



##  API Overview

- GET /api/workouts
- POST /api/workouts
- PUT /api/workouts/{id}
- DELETE /api/workouts/{id}

## Deployment

Frontend

- Hosted on Vercel
- Auto deploys on push to master branch

Backend

- Hosted on AWS EC2 (Ubuntu)
- Dockerized Spring Boot app
- Free domain via DuckDNS + HTTPS via Let’s Encrypt








