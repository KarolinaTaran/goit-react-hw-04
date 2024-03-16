import ImageGallery from "./components/imageGallery/ImageGallery";
import LoadMoreBtn from "./components/loadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/searchBar/SearchBar";
import ErrorMessage from "./components/errorMessage/ErrorMessage";

import { useState, useEffect, useRef } from "react";
import { requestPicsByQuery } from "./components/services/api";
import "./App.css";
import Loader from "./components/loader/Loader";
import ImageModal from "./components/imageModal/ImageModal";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

function App() {
  const [searchQuery, setSearchQuery] = useState(null);
  const [pics, setPics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const prevSearchQuery = useRef(null);
  const [hasMore, setHasMore] = useState(true);

  const openModal = (imgUrl) => {
    setSelectedImageUrl(imgUrl);
  };

  const closeModal = () => {
    setSelectedImageUrl(null);
  };

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
    setSearchPerformed(true);
    setPage(1);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { results, total } = await requestPicsByQuery(searchQuery, page);
        if (Array.isArray(results) && results.length > 0) {
          if (searchQuery !== prevSearchQuery.current || page === 1) {
            setPics(results);
            setHasMore(true);
          } else {
            setPics((prevPics) => [...prevPics, ...results]);
            setHasMore(pics.length + results.length < total);
          }
        } else {
          setHasMore(false);
        }
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    if (searchPerformed && searchQuery) {
      fetchData();
    }
    prevSearchQuery.current = searchQuery;
  }, [searchQuery, searchPerformed, page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearchSubmit} />

      {isError ? (
        <ErrorMessage />
      ) : (
        <>
          <ImageGallery openModal={openModal} pics={pics} />

          {isLoading && <Loader />}

          {pics.length > 0 && hasMore && <LoadMoreBtn onLoadMore={loadMore} />}

          {selectedImageUrl && (
            <ImageModal
              isOpen={true}
              imgUrl={selectedImageUrl}
              closeModal={closeModal}
            />
          )}
        </>
      )}
    </>
  );
}

export default App;
