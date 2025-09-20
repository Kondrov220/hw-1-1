import './App.css';

const name = "Danya";
const url = "https://yt3.googleusercontent.com/PKRBxhCiGa8Y0vPmHa1E2cdjpLhUq2Pl-gESwP7kk2plGgxLdsbjyTd9VjcJwBMiY0HQ8bvx5Q=s160-c-k-c0x00ffffff-no-rj";
const alt = "GitHub Logo";
const site = {
    name: "Google",
    url: "https://www.google.com/",
  };
const a = 1;
const b = 2;
const c = a + b;
const color = ["red", "green", "blue"];
function App() {
  return (
    <div>
      <h1>{name}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img src={url} alt={alt} />
      <a href={site.url} >{site.name}</a>
      <p>{c}</p>
      <ul>
        {color.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
