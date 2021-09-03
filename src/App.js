import './App.css';

function App() {
  return (
    <div>
      <form className="form">
        <input htmlFor="name" type="text" className="searchBox"/>
        <button className="btn">Search</button>
      </form>
      <hr className="linebreaker" />
      <section className="section">
        <ul className="list">
          <li className="list">
            image1
          </li>
          <li className="list">
            image2
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
