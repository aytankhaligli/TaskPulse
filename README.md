# TaskPulse

TaskPulse is a web application that allows organizations to manage their daily tasks online efficiently. It provides a user-friendly interface for creating organizations, adding users, and managing tasks.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Sign Up](#sign-up)
  - [Manage Users](#manage-users)
  - [Manage Tasks](#manage-tasks)
  - [Sign In](#sign-in)

## Features

1. **Sign Up:**

   - Allows potential customers to create organization profiles.
   - Collects organization details (Organization Name, Phone Number, Address).
   - Captures user information (user name, email, password).

2. **Manage Users:**

   - Only ADMINS can create users for the organization.
   - Each user has name, surname, email, and a default password.

3. **Manage Tasks:**

   - Enables users to create tasks and assign them to one or more users.
   - Tasks have title, description, deadline, and status.
   - Users can list all tasks associated with the organization.

4. **Sign In:**
   - Allows users to sign in and access their customer profile details.
   - Passwords must be 6 or more alphanumeric characters.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

## Technologies Used

- React.js
- Redux Toolkit
- React-Router
- Tailwind Css

## Getting Started

To get started with the TaskPulse, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/aytankhaligli/TaskPulse.git
   cd taskpulse
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Start the Development Server:**

   ```bash
   npm run dev
   ```

   Visit `http://localhost:5173` in your browser to access the application.

## User Stories

### 1. Sign Up

As a potential customer, I want to sign up to create my organization profile so that I can organize my staff and tasks on the platform.

#### Acceptance Criteria:

1. Open to anyone who has access to the app.
2. Enter Organization Name, Phone Number, Address.
3. Enter user name, email, and password.

### 2. Manage Users

As an Organization administrator, I want to add users to my organization so that they can use the platform.

#### Acceptance Criteria:

1. Only ADMINS can create the user for the organization.
2. Each user should have a name, surname, email, and default password.

### 3. Manage Tasks

As a user, I want to manage daily tasks of my organization so that I can quickly access and see the status of the tasks.

#### Acceptance Criteria:

1. Create a task and assign it to one or more users.
2. Each task should have title, description, deadline, and status.
3. Each user of the organization can list all tasks.

### 4. Sign In

As a user, I want to sign in and access my customer profile details.

#### Acceptance Criteria:

- Only allow passwords with 6 or more alphanumeric characters.
