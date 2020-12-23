import { useRef, useState, Fragment } from "react";

import Card from "components/Card";
import Input from "components/Input";
import Loader from "components/Loader";

import { submit } from "utils/proxy";
import { debounce } from "utils/general";

import "./app.css";

function App() {
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [active, setActive] = useState(false);

  const setDebounceSearchText = useRef(
    debounce((val) => {
      setLoading(true);
      submit("GET", `users/${val}/repos`, {}).then(
        (response) => {
          setLoading(false);
          setActive(true);
          setResults(response);
        },
        () => {
          setResults([]);
          setLoading(false);
        }
      );
    }, 500)
  ).current;

  return (
    <div className="flex justify-center items-center p-5">
      <Card className="w-full xl:w-3/4 lg:w-11/12">
        <Card.Header style={{ position: "relative" }}>
          <Input
            placeholder="Search github repository..."
            fullWidth
            rounded
            shadowed
            size="lg"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
              setDebounceSearchText(event.target.value);
            }}
          />
        </Card.Header>
        <Card.Body paddingless>
          {loading && (
            <div className="p-4 text-center">
              <Loader type="spinner" />
              <span>Searching...</span>
            </div>
          )}
          {!loading && active && (
            <Fragment>
              {results.length === 0 && (
                <div className="p-4 text-red-500">No data available</div>
              )}
              {results.length > 0 && (
                <ul className="divide-y divide-gray-200">
                  {results.map((item) => (
                    <li key={item.id}>
                      <div className="block hover:bg-gray-50">
                        <div className="px-4 py-4 sm:px-6">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-thin text-gray-700 truncate">
                              {item.name}
                            </p>
                          </div>
                          <div className="mt-2 sm:flex sm:justify-between">
                            <div className="sm:flex">
                              <p className="flex items-center text-sm font-light text-gray-500">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </Fragment>
          )}
        </Card.Body>
        {!loading && results.length > 0 && (
          <Card.Footer className="p-5">
            <b className="mr-2">{results.length}</b> <span>results found</span>
          </Card.Footer>
        )}
      </Card>
    </div>
  );
}

export default App;
