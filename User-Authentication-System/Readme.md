# 🔐 User Authentication System

A full-stack User Authentication System built using **React**, **Spring Boot**, and **MySQL**. This application allows users to register, log in securely, and access a personalized welcome page after successful authentication.

---

## 📌 Features

- 👤 User Registration
- 🔑 User Login Authentication
- ✅ Password Confirmation Validation
- 📱 Responsive User Interface
- 🌐 REST API Integration
- 💾 MySQL Database Connectivity
- 🚀 Navigation using React Router
- 🎨 Modern UI with Bootstrap

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Bootstrap
- CSS3
- Fetch API

### Backend
- Spring Boot
- Spring MVC
- Spring Data JPA
- Maven

### Database
- MySQL

---

## 📂 Project Structure

```text
User-Authentication-System
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── ...
│
├── backend
│   ├── src
│   ├── pom.xml
│   └── ...
│
├── screenshots
│   ├── login-page.png
│   ├── signup-page.png
│   ├── welcome-page.png
│   └── mysql-database.png
│
├── README.md
└── .gitignore
```

---

## 📸 Screenshots

### 🔑 Login Page

![Login Page](screenshots/login-page.png)

---

### 📝 Registration Page

![Signup Page](screenshots/signup-page.png)

---

### 🎉 Welcome Page

![Welcome Page](screenshots/welcome-page.png)

---

### 🗄️ MySQL Database

![Database](screenshots/mysql-database.png)

---

## 🔗 REST API Endpoints

### Register User

```http
POST /api/users/signup
```

#### Request Body

```json
{
  "name": "Sai Krishna",
  "email": "sai@example.com",
  "phone": "9876543210",
  "password": "password123"
}
```

---

### Login User

```http
POST /api/users/login
```

#### Request Body

```json
{
  "email": "sai@example.com",
  "password": "password123"
}
```

---

## 🗃️ Database Schema

### Table: users

| Column | Type |
|---------|------|
| id | BIGINT |
| name | VARCHAR |
| email | VARCHAR |
| phone | VARCHAR |
| password | VARCHAR |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-github-username/User-Authentication-System.git
```

---

### 2️⃣ Backend Setup

```bash
cd backend
```

Configure your MySQL database in:

```text
src/main/resources/application.properties
```

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name
spring.datasource.username=your_username
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
```

Run the Spring Boot application:

```bash
mvn spring-boot:run
```

The backend will start on:

```text
http://localhost:8080
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run the application:

```bash
npm run dev
```

The frontend will start on:

```text
http://localhost:5173
```

---

## 📋 Future Enhancements

- 🔐 JWT Authentication
- 🔒 Password Encryption using BCrypt
- 👁️ Show/Hide Password
- 📧 Email Verification
- 🔄 Forgot Password
- 👥 Role-Based Authentication (Admin/User)
- ☁️ Deploy Frontend and Backend
- 🐳 Docker Support

---

## 👨‍💻 Author

**Sai Krishna**

- GitHub: https://github.com/your-github-username
- LinkedIn: https://www.linkedin.com/in/your-linkedin-profile/

---

## ⭐ If you found this project helpful, consider giving it a star!