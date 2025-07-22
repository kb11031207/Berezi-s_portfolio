# Portfolio Website - Modular Structure Guide 🚀

Your portfolio has been refactored into a clean, modular structure that makes it **super easy** to update content without touching code!

## 📁 File Structure

```
Berezi-s_portfolio/
├── index.html           # Clean HTML structure
├── style.css           # All your styling (unchanged)
├── js/
│   ├── personal.js     # 👤 Your personal info & skills
│   ├── projects.js     # 💼 All your projects
│   ├── animations.js   # ✨ Matrix & circuit animations
│   ├── sections.js     # 🔧 Popup & navigation logic
│   └── main.js         # 🎯 Coordinates everything
└── images/             # Your project images
```

## 🎯 Quick Updates Guide

### ➕ Adding a New Project

1. Open `js/projects.js`
2. Add a new project object to the `projects` array:

```javascript
{
    id: 'my-new-project',
    title: 'My Amazing New Project',
    category: ['in-progress'],  // or ['completed', 'featured', etc.]
    status: 'in-progress',
    completion: 75,
    description: 'Short description for the project card',
    overview: 'Detailed overview for the popup...',
    role: 'Your role in the project...',
    challenges: 'What challenges you faced and how you solved them...',
    statusDescription: 'Current status details...',
    techStack: ['React', 'Node.js', 'MongoDB'],
    skills: ['react', 'javascript', 'database'],  // lowercase for filtering
    images: [
        'images/project1.jpg',
        'images/project2.jpg'
    ],
    sourceLink: 'https://github.com/yourusername/project',  // optional
    demoLink: 'https://yourproject.com'  // optional
}
```

3. Save the file - **that's it!** 🎉

### 🛠️ Adding a New Skill

1. Open `js/personal.js`
2. Add to the `skills` array:

```javascript
{
    id: 'new-skill',
    name: 'New Technology',
    category: 'languages',  // or 'frameworks', 'tools'
    icon: 'fab fa-icon-name'  // FontAwesome icon class
}
```

### ✏️ Updating Personal Info

Edit the `personalInfo` object in `js/personal.js`:

```javascript
const personalInfo = {
    name: "Your Name",
    title: "Your Title",
    profileImage: "images/your-photo.jpg",
    aboutText: [
        ">> Your about text here...",
        ">> Add more lines as needed..."
    ],
    // ... rest of your info
}
```

### 🔗 Updating Social Links

In `js/personal.js`, modify the `socialLinks` array:

```javascript
socialLinks: [
    {
        platform: "github",
        url: "https://github.com/yourusername",
        icon: "fab fa-github"
    }
    // Add more as needed...
]
```

## 🎨 What Didn't Change

- **Visual design** - Everything looks exactly the same!
- **Animations** - Matrix rain and circuit effects work perfectly
- **Functionality** - All popups, filtering, and interactions work
- **CSS** - No changes to styling at all

## 🔥 Benefits of This Refactor

1. **Easy Updates**: Add projects by editing a simple data object
2. **No More Code Hunting**: All content is in dedicated files
3. **Maintainable**: Each file has a specific purpose
4. **Scalable**: Easy to add new features
5. **Clean**: HTML is now clean and readable

## 🚀 Advanced Usage

### Adding Projects Programmatically

You can even add projects dynamically in the console:

```javascript
portfolioApp.addProject({
    id: 'test-project',
    title: 'Test Project',
    // ... other properties
});
```

### Updating Personal Info on the Fly

```javascript
portfolioApp.updatePersonalInfo({
    name: "New Name",
    title: "New Title"
});
```

## 🛠️ File Purposes

- **`personal.js`** - Everything about you (bio, skills, social links)
- **`projects.js`** - All your projects and their details
- **`animations.js`** - Visual effects (you rarely need to touch this)
- **`sections.js`** - UI interactions (you rarely need to touch this)
- **`main.js`** - Glues everything together (you rarely need to touch this)

---

**The bottom line**: To update your portfolio, you now just edit simple data objects instead of hunting through 1200+ lines of mixed HTML/CSS/JS! 🎯 