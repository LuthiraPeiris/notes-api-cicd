# Automated CI/CD Pipeline with GitHub Actions, Docker Hub, and AWS EC2

![Project Banner/Logo](./cicd.png)
<!-- Replace the URL above with your actual image link -->

![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![AWS EC2](https://img.shields.io/badge/AWS_EC2-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

---

## 📝 Description

This project is a simple **Node.js and Express Notes API** built as my first hands-on experience with a complete CI/CD pipeline.

The application is containerized using **Docker**, the Docker image is pushed to **Docker Hub**, and the deployment is automated using **GitHub Actions** to run the latest container on an **AWS EC2 Ubuntu instance**.

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Backend** | Node.js, Express.js |
| **Containerization** | Docker |
| **Registry** | Docker Hub |
| **CI/CD** | GitHub Actions |
| **Cloud Hosting** | AWS EC2 (Ubuntu) |
| **Remote Access** | SSH |

---

## 📋 Project Overview

The API includes simple endpoints such as:

```txt
GET /
GET /api/health
GET /api/notes
POST /api/notes
DELETE /api/notes/:id