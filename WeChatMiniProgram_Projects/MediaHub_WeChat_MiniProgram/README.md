# WeChat Mini Program — MediaHub

A feature-rich WeChat Mini Program that integrates media content browsing, movie listings, and system utility tools using WeChat’s native API framework.

## Overview

**MediaHub** is designed as a lightweight multimedia information centre on the WeChat Mini Program platform.  
It includes three main modules:  
- **Home Page** – Displays articles, images, and featured content  
- **Movies Page** – Shows movie ratings, posters, and upcoming releases  
- **Settings Page** – Integrates native WeChat system APIs and device tools  


## Features

### Home Page
- Displays a **carousel banner** from local JSON data  
- Shows a list of articles with avatar, author, date, title, and summary  
- Articles are dynamically loaded using `wx.request()`  
- Supports navigation to article detail pages  

### Movies Page
- Displays “Now Showing” and “Coming Soon” movies  
- Includes ratings, star indicators, and posters  
- “View More” button navigates to full movie listings  
- Data loaded from `data/movie.json`  

### Settings Page
- Login with WeChat account (`wx.login()`)  
- Displays user avatar and nickname after authorisation  
- Integrates WeChat native API features:  
  - Clear cache (`wx.clearStorage()`)  
  - System info (`wx.getSystemInfo()`)  
  - Network status (`wx.getNetworkType()`)  
  - Location & map view (`wx.getLocation()`, `wx.openLocation()`)  
  - Compass and accelerometer (“Shake” interaction)  
  - QR code scanner (`wx.scanCode()`)  


## Technical Stack

| Technology | Description |
|-------------|--------------|
| **Framework** | Native WeChat Mini Program |
| **Languages** | JavaScript, WXML, WXSS, JSON |
| **Data Source** | Local JSON / mock database |
| **API Usage** | WeChat system, device, and location APIs |
| **IDE** | WeChat Developer Tools |



## Key Highlights

- Modular and component-based architecture  
- Real-time dynamic rendering from JSON data  
- Full integration with WeChat system APIs  
- Clean and responsive UI with minimal design  
- Mock login and avatar update functionality  


## Future Enhancements

- Integrate cloud database (`wx.cloud.database()`)  
- Add user favourites and comments  
- Implement theme switch (dark/light mode)  
- Optimise data loading and image caching  


## Preview
![Home](./screenshots/Home%20Page.png)
![Movies](./screenshots/Movies%20Page.png)
![Settings](./screenshots/Settings%20Page.png)


