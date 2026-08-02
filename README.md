# IGDTUW Campus Lost & Found Portal

A full-stack web application for reporting, searching, and managing lost and found items within the IGDTUW campus. The application provides secure Google Authentication, cloud-based data storage using Firebase Firestore, and owner-based access control for managing reported items.

## Features

- Google Authentication (Firebase)
- Report Lost & Found Items
- View All Reported Items
- Search Items
- Filter by Category, Type, and Status
- Edit Reported Items
- Delete Reported Items
- Mark Items as Claimed
- Owner-based Edit/Delete Access
- Cloud Firestore Database
- Responsive Design
- Dark/Light Theme

## Tech Stack

**Frontend**
- React.js
- React Router DOM
- CSS3
- Vite

**Backend & Database**
- Firebase Firestore
- Firebase Authentication

**Tools**
- Git
- GitHub
- Vercel

## Key Functionalities

- Secure Google Sign-In
- Owner-based authorization for Edit/Delete
- Cloud Firestore integration
- Item claim management
- Responsive interface

## Firebase Setup

Enable the following services in Firebase:

- Authentication (Google Sign-In)
- Cloud Firestore

Configure your Firebase project in:

```
src/firebase/firebase.js
```

## Project Structure

```
src/
 ├── components/
 ├── context/
 ├── firebase/
 ├── pages/
 ├── utils/
 ├── App.jsx
 └── main.jsx
```

## Live Demo

https://igdtuw-lost-found.vercel.app/

## Author

Niharika (IGDTUW )
