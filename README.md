# Steps to create News-app

## 1. Create Skeleton/Structure

```html
<div className="main-container">
  {/* 1. Create Header section */}
  <header className="news-header">
    <h1>News Component</h1>
    <div className="search-bar">
      <form>
        <input type="text" placeholder="Search News..." />
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      <i class="bx  bxs-sun theme-icon"></i>
      {/* <i class="bx  bxs-moon"></i> */}
    </div>
  </header>
  {/* 2. Create a News container Inside this 2 containers - categories - news
  content */}
  <div className="news-container">
    {/* For Categories */}
    <div className="sidebar">
      {/* 2.1 Show user image and name */}
      <div className="user">
        <img src="{userImg}" alt="User Image" />
        <p>Utkarsh News App</p>
      </div>

      {/* 3.1 Add Categories */} {categories.map((category, index) => (
      <a className="nav-link" key="{index}"> {category} </a>
      ))}

      <a className="nav-link">
        Bookmarks
        <i className="fa-solid fa-bookmark bookmark"></i>
      </a>
    </div>

    {/* News Content */}
    <div className="news-content">
      {/* 4. Headline */}
      <div className="headline">
        <img src="" alt="" />
        <h2>
          {" "} Headline
          <i className="fa-solid fa-bookmark bookmark"></i>
        </h2>
      </div>

      {/* 5. Small Cards - 6 */}
      <div className="news-grid">
        <div className="card">
          <img src="" alt="" />
          <h2>
            {" "} small-healine
            <i className="fa-solid fa-bookmark bookmark"></i>
          </h2>
        </div>
        <div className="card">
          <img src="" alt="" />
          <h2>
            small-healine
            <i className="fa-solid fa-bookmark bookmark"></i>
          </h2>
        </div>
        <div className="card">
          <img src="" alt="" />
          <h2>
            small-healine
            <i className="fa-solid fa-bookmark bookmark"></i>
          </h2>
        </div>
        <div className="card">
          <img src="" alt="" />
          <h2>
            small-healine
            <i className="fa-solid fa-bookmark bookmark"></i>
          </h2>
        </div>
        <div className="card">
          <img src="" alt="" />
          <h2>
            small-healine
            <i className="fa-solid fa-bookmark bookmark"></i>
          </h2>
        </div>
        <div className="card">
          <img src="" alt="" />
          <h2>
            small-healine
            <i className="fa-solid fa-bookmark bookmark"></i>
          </h2>
        </div>
      </div>
    </div>
  </div>
</div>
```

## 2. Write CSS for the App

```css
:root {
  /* Light theme colors */
  --bg-color: #f8f9fa;
  --text-color: #1e3d59;
  --header-bg: #1e3d59;
  --header-text: #ffffff;
  --card-bg: #ffffff;
  --accent-color: #ff9f43;
}

.dark-theme {
  /* Dark theme overrides */
  --bg-color: #181a1b;
  --text-color: #f1f1f1;
  --header-bg: #121416;
  --header-text: #f1f1f1;
  --card-bg: #1f2223;
  --accent-color: #feca57;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.4s ease, color 0.4s ease;
}

/* ===== Main Container ===== */
.main-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

/* ===== Header ===== */
.news-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--header-bg);
  color: var(--header-text);
  padding: 15px 30px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.4s ease;
}

.news-header h1 {
  font-size: 24px;
  letter-spacing: 1px;
}

/* ===== Search Bar + Theme ===== */
.search-bar {
  display: flex;
  align-items: center;
  gap: 15px;
}

.search-bar form {
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 30px;
  padding: 5px 10px;
}

.search-bar input {
  border: none;
  outline: none;
  padding: 8px;
  border-radius: 30px;
  width: 200px;
  font-size: 14px;
}

.search-bar button {
  border: none;
  background: none;
  cursor: pointer;
  padding: 6px;
  color: #1e3d59;
  font-size: 16px;
}

/* ===== Theme Icons ===== */
.theme-icon,
.bxs-moon {
  font-size: 22px;
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;
}

.theme-icon:hover,
.bxs-moon:hover {
  transform: scale(1.2);
  color: var(--accent-color);
}

/* Hide moon by default (show dynamically via JS later) */
.bxs-moon {
  display: none;
  color: var(--header-text);
}

/* ================= NEWS CONTAINER ================= */
.news-container {
  display: flex;
  flex: 1;
  overflow: hidden;
}

/* ================= SIDEBAR ================= */
.sidebar {
  width: 240px;
  background-color: #ffffff;
  border-right: 1px solid #e0e0e0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.user {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  text-align: center;
  flex-direction: column;
}

.user img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
  border: 3px solid #1e3d59;
}

.user p {
  font-weight: bold;
  color: #1e3d59;
}

/* Category buttons (future use) */
.sidebar button {
  background-color: transparent;
  border: none;
  color: #1e3d59;
  text-align: left;
  font-size: 16px;
  margin-bottom: 15px;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: background 0.2s ease;
}

.sidebar button:hover {
  background-color: #f1f3f5;
}
/* ================= CATEGORIES ================= */
.nav-link {
  display: block;
  text-decoration: none;
  color: var(--text-color);
  font-size: 16px;
  font-weight: 500;
  padding: 10px 12px;
  border-radius: 8px;
  margin-bottom: 10px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.nav-link:hover {
  background-color: var(--accent-color);
  color: white;
  transform: translateX(4px);
}

/* Active category */
.nav-link.active {
  background-color: var(--accent-color);
  color: white;
  font-weight: 600;
  transform: translateX(4px);
}
/* ================= NEWS CONTENT ================= */
.news-content {
  flex: 1;
  padding: 20px 30px;
  overflow-y: auto;
}

/* Headline section */
.headline {
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 25px;
}

.headline img {
  width: 150px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
}

.headline h2 {
  font-size: 20px;
  font-weight: 600;
  color: #1e3d59;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

/* Bookmark icon */
.bookmark {
  color: #ff9f43;
  cursor: pointer;
  margin-left: 10px;
  transition: transform 0.2s ease;
}

.bookmark:hover {
  transform: scale(1.1);
}

/* ================= NEWS GRID ================= */
.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
}

.card {
  background-color: #ffffff;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}

.card img {
  width: 100%;
  height: 140px;
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 10px;
}

.card h2 {
  font-size: 16px;
  font-weight: 500;
  color: #1e3d59;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

## 3. Create a useFetch custom hook for fetching API

1. Import react hooks (useState, useEffect)

```js
import { useState, useEffect } from "react";
```

2. set up apiCache empty object initilally

```js
const apiCache = {};
```

3. Define the hook function

```js
export default function useFetch(url) {
  // define states
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
}
```

4.  Add useEffect for fetching

- You want to run your fetching logic whenever url changes,
- so wrap the fetching logic inside a useEffect:

```js
useEffect(() => {
  if (!url) return; // no url, no call
}, [url]);
```

5. Inside use Effect - Add cache check before fetching

```js
if (apiCache[url]) {
  console.log("⚡ Using cached data for:", url);
  setData(apiCache[url]);
  setLoading(false);
  return; // skip fetch
}
```

6.  Write async fetch logic

- Before fetching, reset loading and error:
- Define an internal fetchData() function that:
- Calls the API
- Parses the JSON
- Stores it in cache
- Updates state accordingly

```js
setLoading(true);
setError(null);
const fetchData = async () => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 404) {
        setData({ notFound: true });
      } else {
        throw new Error(`HTTP Error: ${response.status}`);
      }
    } else {
      const resData = await response.json();
      apiCache[url] = resData; // save in cache
      setData(resData);
    }
  } catch (error) {
    setError(error);
  } finally {
    setLoading(false);
  }
};
```

7. Return the results

```js
return { data, loading, error };
```

8. Final Code

```js
import { useState, useEffect } from "react";

const apiCache = {};
export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    // Use Cache
    if (apiCache[url]) {
      console.log("⚡ Using cached data for:", url);
      console.log("⚡ Using cached data :", apiCache);
      setData(apiCache[url]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          if (response.status === 404) {
            setData({ notFound: true });
          } else {
            throw new Error(`HTTP Error: ${response.status}`);
          }
        } else {
          const resData = await response.json();
          apiCache[url] = resData;
          setData(resData);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
```

## 4. In main file use this custom hook (useFetch)

1. Import the useFetch in main file

```js
import useFetch from "./useFetch";
```

2. Create a hook to store selected category default general and headline and news grid news

```js
// State to manage selected category
const [selectedCategory, setSelectedCategory] = useState("general");
// State to manage headline news
const [headline, setHeadline] = useState(null);
// State to manage headline news
const [news, setNews] = useState(null);
```

3. Use the custom useFetch hook

```js
const API_KEY = "e44e09001f7655277af07cd5512bf391";
let gnewsURL = `https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&lang=en&apikey=${API_KEY}`;
const { data, loading, error } = useFetch(gnewsURL);

console.log("data", data);
console.log("error", error);
```

4. useEffect to update headline and news list when data changes. Only run when 'data' changes

```js
useEffect(() => {
  if (data && data.articles) {
    setHeadline(data.articles[0]); // First article as headline
    setNews(data.articles.slice(1, 7)); // Next 6 articles as news list
  }
}, [data, selectedCategory]); // Dependency on 'data'
```

5. Update Headline JSX

```jsx
{
  /* 4. Headline  */
}
{
  headline ? (
    <div className="headline">
      <img src={headline.image || noImg} alt="" />
      <h2>
        {" "}
        {headline.title}
        <i className="fa-solid fa-bookmark bookmark"></i>
      </h2>
    </div>
  ) : (
    <p>Loading Headline news...</p>
  );
}
```

6. Update News Grid JSX

```jsx
 {/* 5. Small Cards - 6  */}
          <div className="news-grid">
            {news ? (
              news.map((article) => (
                <div className="card">
                  <img src={article.image || { noImg }} alt={article.title} />
                  <h2>
                    {article.title}
                    <i className="fa-solid fa-bookmark bookmark"></i>
                  </h2>
                </div>
              ))
            ) : (
              <p>Loading news...</p>
            )}
```

## 5. Handle Category Selection

1. Create a function to handlecategoryClick outside useEffect

```js
// Function to handle category click
const handleCategoryClick = (evt, category) => {
  evt.stopPropagation();
  setSelectedCategory(category);
};
```

2. Update the sidebar category JSX

```jsx
{
  /* 3.1 Add Categories  */
}
{
  categories.map((category, index) => (
    <a
      href="#"
      className="nav-link"
      key={index}
      onClick={(evt) => handleCategoryClick(evt, category)}
    >
      {category.toUpperCase()}
    </a>
  ));
}
```
