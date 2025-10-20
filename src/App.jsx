import userImg from "./assets/user.jpeg";
import "./App.css";
import useFetch from "./useFetch";
import { useEffect, useState } from "react";
import noImg from "./assets/no-img.png";
/* 
   const API_KEY = "e44e09001f7655277af07cd5512bf391";
        let gnewsURL = `https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&lang=en&apikey=${API_KEY}`;

*/

const categories = [
  "general",
  "business",
  "technology",
  "entertainment",
  "sports",
  "science",
  "health",
];

function App() {
  // State to manage selected category
  const [selectedCategory, setSelectedCategory] = useState("general");

  // State to manage headline news
  const [headline, setHeadline] = useState(null);

  // State to manage headline news
  const [news, setNews] = useState(null);

  // State to hold user Input in search box
  const [userInput, setUserInput] = useState("");
  // State to handle search functionality
  const [searchQuery, setSearchQuery] = useState("");

  const API_KEY = "e44e09001f7655277af07cd5512bf391";
  let gnewsURL = `https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&lang=en&apikey=${API_KEY}`;

  // Url will change if I am searching news
  if (searchQuery) {
    gnewsURL = `https://gnews.io/api/v4/search?q=${searchQuery}&lang=en&apikey=${API_KEY}`;
  }

  const { data, loading, error } = useFetch(gnewsURL);

  console.log("data", data);
  console.log("error", error);

  //useEffect to update headline and news list when data changes
  // Only run when 'data' changes
  useEffect(() => {
    if (data && data.articles) {
      setHeadline(data.articles[0]); // First article as headline
      setNews(data.articles.slice(1, 7)); // Next 6 articles as news list
    } else {
      // No results found
      setHeadline(null);
      setNews([]);
    }
  }, [data, selectedCategory, searchQuery]); // Dependency on 'data'

  // Function to handle category click
  const handleCategoryClick = (evt, category) => {
    evt.stopPropagation();
    setSelectedCategory(category);
    setSearchQuery("");
  };

  // Function to handle Search Input Box
  const handleSearch = (evt) => {
    evt.preventDefault();
    if (!userInput) return;
    setSearchQuery(userInput);
    setUserInput("");
  };

  return (
    <div className="main-container">
      {/* 1. Create Header section  */}
      <header className="news-header">
        <h1>News Component</h1>
        <div className="search-bar">
          <form onClick={(evt) => handleSearch(evt)}>
            <input
              type="text"
              placeholder="Search News..."
              value={userInput}
              onChange={(evt) => setUserInput(evt.target.value)}
            />
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
          <i className="bx  bxs-sun theme-icon"></i>
          {/* <i class='bx  bxs-moon'  ></i>  */}
        </div>
      </header>
      {/* 2. Create a News container 
          Inside this 2 containers 
            - categories 
            - news content
      */}
      <div className="news-container">
        {/* For Categories  */}
        <div className="sidebar">
          {/* 2.1 Show user image and name */}
          <div className="user">
            <img src={userImg} alt="User Image" />
            <p>Utkarsh News App</p>
          </div>

          {/* 3.1 Add Categories  */}
          {categories.map((category, index) => (
            <a
              href="#"
              className="nav-link"
              key={index}
              onClick={(evt) => handleCategoryClick(evt, category)}
            >
              {category.toUpperCase()}
            </a>
          ))}

          <a className="nav-link">
            BOOKMARKS
            <i className="fa-solid fa-bookmark bookmark"></i>
          </a>
        </div>

        {/* News Content  */}
        <div className="news-content">
          {/* 4. Headline  */}
          {loading ? (
            <p>Loading Headline news...</p>
          ) : headline ? (
            <div className="headline">
              <img src={headline.image || noImg} alt="" />
              <h2>
                {" "}
                {headline.title}
                <i className="fa-solid fa-bookmark bookmark"></i>
              </h2>
            </div>
          ) : (
            <p>No news found for "{searchQuery}"</p>
          )}

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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
