const BlogCard = ({ data, onClickCard }) => {
  return (
    <div className="overflow-hidden rounded-lg flex flex-col items-start justify-start w-80" onClick={onClickCard}>
      <img src={data.gambar} className="h-56 w-full object-cover" />
      <div className="bg-white">
        <a href="#">
          <h3 className="mt-0.5 text-lg font-extrabold text-start">{data.judul}</h3>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;