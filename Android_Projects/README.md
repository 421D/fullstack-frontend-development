# Daily Finance App（今日理财资讯）


### Project Overview
This is an **Android finance management application** developed using **Java** in **Android Studio**. The app enables users to view, add, and manage financial items in a structured list. 
It integrates a **splash screen**, **data-driven main interface**, and an **interactive user interface** for real-time content updates.

Key features:  
- Launch splash screen with short animation or MP4 intro video
- The main dashboard lists items with images, titles, and descriptions
- Supports dynamic addition of new entries via input fields at the top of the main view
- Utilises local JSON-based data storage for persistence and offline functionality





### Libraries & Tools
- **Java 8+**: Core programming language  
- **Android Studio**: IDE and Gradle build system
- **Android SDK**: provides UI components and platform APIs
- **RecyclerView**: efficient list rendering and item management
- **JSON**: storage for user-generated content
- **MediaPlayer**: handles MP4 playback in the splash screen



### Technical Details
- **Activities & UI Flow**:  
  - `SplashActivity`: displays a short introductory animation/video on launch
  - `MainActivity`: main dashboard for displaying and adding entries
  - `XianshiActivity`: auxiliary interface for extended content or details
- **Data Management**:  
  - `DayData.java` defines the data model for financial items
  - A JSON file stores all user-created entries and loads at startup
  - When a new entry is added, the list updates dynamically without restarting the app
- **Layouts**:  
  - XML layout files separate UI structure from logic
  - Designed with responsive layouts for multiple screen densities
- **Resource Management**:  
  - `drawable`: stores app images and icons
  - `mipmap`: contains adaptive launcher icons for different resolutions
  - `values`: manages strings, colours, and dimension resources


### Notes
This project was developed during my undergraduate studies as part of coursework.
It is no longer actively maintained but demonstrates practical Android UI design, local data persistence, and user interaction handling in Java.
