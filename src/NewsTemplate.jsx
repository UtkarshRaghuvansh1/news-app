import userImg from "./assets/user.jpeg";
import "./App.css";

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
function NewsTemplate() {
  return (
    <div className="main-container">
      {/* 1. Create Header section  */}
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
            <a className="nav-link" key={index}>
              {category}
            </a>
          ))}

          <a className="nav-link">
            Bookmarks
            <i className="fa-solid fa-bookmark bookmark"></i>
          </a>
        </div>

        {/* News Content  */}
        <div className="news-content">
          {/* 4. Headline  */}
          <div className="headline">
            <img src="" alt="" />
            <h2>
              {" "}
              Headline
              <i className="fa-solid fa-bookmark bookmark"></i>
            </h2>
          </div>

          {/* 5. Small Cards - 6  */}
          <div className="news-grid">
            <div className="card">
              <img src="" alt="" />
              <h2>
                {" "}
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
  );
}

export default NewsTemplate;
