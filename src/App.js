import { useRef, useState, Fragment } from "react";
import { useDispatch } from "react-redux";

import Card from "components/Card";
import Input from "components/Input";
import Loader from "components/Loader";

// import { submit } from "utils/proxy";
import { debounce } from "utils/general";

import { searchData } from "store/app/actions";
import useAppSelector from "store/app/selectors";

import "./app.css";

function App() {
  const dispatch = useDispatch();

  const { searchDataLoading, repoList = [] } = useAppSelector();
  const [searchText, setSearchText] = useState("");

  const setDebounceSearchText = useRef(
    debounce((val) => {
      dispatch(searchData(val));
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
          {searchDataLoading && (
            <div className="p-4 text-center">
              <Loader type="spinner" />
              <span>Searching...</span>
            </div>
          )}
          {!searchDataLoading && (
            <Fragment>
              {repoList.length === 0 && (
                <div className="p-4 text-red-500">No data available</div>
              )}
              {repoList.length > 0 && (
                <ul className="divide-y divide-gray-200">
                  {repoList.map((item) => (
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
        {!searchDataLoading && repoList.length > 0 && (
          <Card.Footer className="p-5">
            <b className="mr-2">{repoList.length}</b> <span>results found</span>
          </Card.Footer>
        )}
      </Card>
    </div>
  );
}

export default App;
