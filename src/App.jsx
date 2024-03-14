import ImageGallery from "./components/imageGallery/ImageGallery";
import LoadMoreBtn from "./components/loadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/searchBar/SearchBar";
import ErrorMessage from "./components/errorMessage/ErrorMessage";

import { useState, useEffect } from "react";
import { requestPicsByQuery } from "./components/services/api";
import "./App.css";
import Loader from "./components/loader/Loader";

function App() {
  const [searchQuery, setSearchQuery] = useState(null);
  const [pics, setPics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        let data = [];
        if (searchQuery) {
          data = await requestPicsByQuery(searchQuery);
        }
        setPics(data);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [searchQuery]);

  return (
    <>
      <SearchBar onSubmit={handleSearchSubmit} />
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <ErrorMessage />
      ) : (
        <ImageGallery pics={pics} />
      )}
      <LoadMoreBtn />
    </>
  );
}

export default App;
