const LoadMoreBtn = ({ hasMore, onLoadMore, searchQuery }) => {
  const loadMore = () => {
    onLoadMore(searchQuery);
  };
  return (
    <div>
      <button onClick={loadMore}>Load more</button>
    </div>
  );
};

export default LoadMoreBtn;
