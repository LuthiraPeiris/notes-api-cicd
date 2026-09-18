# 🚀 Automated CI/CD Pipeline with GitHub Actions, Docker Hub & AWS EC2

<p align="center">
  <img src="./cicd.png" alt="CI/CD Pipeline Architecture" width="900"/>
</p>

<p align="center">
  <strong>A hands-on DevOps project demonstrating automated application deployment using GitHub Actions, Docker, Docker Hub, and Amazon EC2.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js"/>
  <img src="https://img.shields.io/badge/Docker-Containerized-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"/>
  <img src="https://img.shields.io/badge/GitHub_Actions-CI%2FCD-2088FF?style=for-the-badge&logo=githubactions&logoColor=white" alt="GitHub Actions"/>
  <img src="https://img.shields.io/badge/AWS-EC2-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" alt="AWS EC2"/>
</p>

---

## 📌 Project Overview

This project is a simple **Node.js and Express.js Notes API** created to gain practical experience with an end-to-end **CI/CD workflow**.

The main focus of the project is not the complexity of the API, but the process of automatically taking application source code from a GitHub repository, building a Docker image, publishing the image to Docker Hub, and deploying the latest version to an **AWS EC2 Ubuntu instance**.

The complete workflow is:

```text
Developer
    │
    ▼
GitHub Repository
    │
    │ Push
    ▼
GitHub Actions
    │
    ├── Install Dependencies
    ├── Run Tests
    ├── Build Docker Image
    ├── Push Image
    │
    ▼
Docker Hub
    │
    │ Pull Latest Image
    ▼
AWS EC2
    │
    ▼
Docker Container
    │
    ▼
Notes API
