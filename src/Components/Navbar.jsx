const Navbar = ({ setCategory }) => {
  const categories = [
    { name: "Technology", value: "technology" },
    { name: "Business", value: "business" },
    { name: "Health", value: "health" },
    { name: "Science", value: "science" },
    { name: "Entertainment", value: "entertainment" },
    { name: "Sports", value: "sports" },
  ];
  return (
    <nav className="navbar navbar-expand-lg bg-primary " data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">News</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {categories.map((category) => (
              <li className="nav-item" key={category.value}>
                <button
                  className="nav-link btn btn-link"
                  onClick={() => setCategory(category.value)}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
