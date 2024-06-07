import "../styles/loader.css";
import "../styles/sr-only.css";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__circle" title="loading...">
        <span className="sr-only">loading...</span>
      </div>
    </div>
  );
};

export default Loader;
