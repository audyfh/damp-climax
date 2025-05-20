import { useParams } from 'react-router-dom';
import { blogData } from "..";

const BlogDetail = () => {

  const { id } = useParams();
  const blogId = parseInt(id, 10);

  const blog = blogData.find((item) => item.id === blogId);

  if (!blog) {
    return <p>Blog tidak ditemukan.</p>;
  }

  return (
    <div className="bg-white flex flex-col items-center justify-between p-5"> 
      <div className="mx-auto max-w-lg text-center">
        <div className="text-2xl font-bold text-gray-900 md:text-3xl">
          {blog.judul}
        </div>
      </div>
      <div className="mx-auto my-5 ">
        <img
          src={blog.gambar}
          alt="photo unknown"
          className="rounded-xl h-90 w-auto object-cover"
        />
      </div>
      <div className="text-xl text-justify tracking-wide mx-auto md:mx-30">
        {blog.konten}
      </div>
    </div>
  );
};

export default BlogDetail;
