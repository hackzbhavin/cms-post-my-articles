## 📸 Screenshots

### 🏠 Home Page for all posts
![Homepage Screenshot](../screenshots/HomePage.png)

### Create Post Page
![Homepage Screenshot](../screenshots/CreatePost.png)

### Edit Post Page
![Homepage Screenshot](../screenshots/EditPost.png)

### Delete Post Popup
![Homepage Screenshot](../screenshots/DeletePost.png)

### Read Post
![Homepage Screenshot](../screenshots/ReadPost.png)

### Preview Post while edit or create
![Homepage Screenshot](../screenshots/PreviewPost.png)



# MyCMS - Deliverables & Documentation

## 📌 Overview

**MyCMS** is a custom-built, extensible Content Management System (CMS) using **Next.js**. It includes:

- A **WYSIWYG Editor** for writing and formatting posts.
- A **Plugin System** to extend core functionalities (e.g., YouTube embedding).
- CRUD operations for managing posts.
- MySQL database for storing content.

---

## 1️⃣ Source Code 📂

The source code is hosted on:
🔗 [GitHub Repository]([https://github.com/your-repo-link](https://github.com/hackzbhavin/cms-post-my-articles.git))

To clone the repository:

```sh
 git clone https://github.com/hackzbhavin/cms-post-my-articles.git
 cd cms-post-my-articles
```

---

## 2️⃣ Getting Started 🚀

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18+)
- **MySQL** (Database for storing posts)
- **Git** (for version control)

### Installation Steps

1. Install dependencies:
   ```sh
   npm install
   ```
2. Set up environment variables in `.env.local`:
   ```env
   DATABASE_URL=mysql://user:password@localhost:3306/mycms
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   ```
3. Run the development server:
   ```sh
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 3️⃣ Plugin System 🧩

### How Plugins Work

- The CMS supports **plug-and-play** plugins.
- Simply create a plugin file and start using it—no manual registration is required.

### Creating a New Plugin

1. Create a new file under `plugins/` (e.g., `videoEmbed.ts`).
2. Implement your functionality:
   ```ts
   export default function VideoEmbedPlugin(url: string) {
     return `<iframe src="https://www.youtube.com/embed/${url}" frameborder="0" allowfullscreen></iframe>`;
   }
   ```
3. **Use the Plugin in the Editor**  
   - Open the CMS editor.
   - Add a YouTube URL.
   - The plugin automatically converts it into an embedded video.

✅ **No need to register plugins manually.**  
✅ **No plugin settings required.**  
✅ **Just add the plugin file and start using it.**

---

## 4️⃣ Deployment 🌍

### Preferred Platforms

The CMS has be deployed on **Vercel**.

### Steps for Deployment

#### **Vercel Deployment** (Recommended)

1. Push code to GitHub.
2. Go to [Vercel](https://vercel.com/) and import the repository.
3. Set environment variables in **Vercel Dashboard**.
4. Click **Deploy**.    

🔗 **Live Demo:** [CMS Deployment Link](https://cms-post-my-articles.vercel.app/)

### **Live Database**

1. Open **Google Cloud Platform (GCP)**.  
2. Create a **SQL Instance** and select **MySQL** as the database type.  
3. Set up a **username and password**, then navigate to the **Databases** section to create a new database.  
4. Connect to the database and run **migrations**.  
5. Keep in mind that **IP connection issues are common**. Initially, allow all connections by setting `0.0.0.0/0`, and later restrict access to enhance security.
   
---

## 5️⃣ Features 📝

✅ **WYSIWYG Editor** (Rich text editing)  
✅ **CRUD Operations** (Create, Read, Update, Delete posts)  
✅ **Plugin System** (Extend functionality)  
✅ **Post Preview Mode** (View changes before publishing)  
✅ **MySQL Database** (Persistent data storage)  
✅ **Custom CSS Styling** (No Tailwind, pure CSS)  

---



