import { BlogItem } from "../../components";
import { useState, useEffect } from "react";

const blogs = [
	{
		image: "https://cdn.easyfrontend.com/pictures/blog/blog_3.jpg",
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/blog/blog_13_1.jpg",
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/blog/blog_9.jpg",
	},
];
const BlogPost = () => {

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [headImg, setHeadImg] = useState(""); 
	const [subImages, setSubImages] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadPost = async () => {
			try {
				const data = await fetchPost();
				setTitle(data.title);
				setDescription(data.description);
				setHeadImg(data.headImg);
				setSubImages(data.subImages || []);
			} catch (err) {
				setError(err.message || "An error occurred");
			} finally {
				setLoading(false);
			}
		};

		loadPost();
	}, []);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;

	return (
		<section className="ezy__blog7_gHdAFsGn text-stone-800 bg-white dark:bg-[#0b1727] dark:text-white">
			<img
				src={headImg}
				alt="Blog Banner"
				className="h-auto max-w-full w-full"
			/>

			<div className="py-14 md:py-24">
				<div className="container px-8 md:px-24">
					<div className="grid grid-cols-12 justify-center">
						<div className="col-span-12 lg:col-span-8">
							<h2 className="text-[32px] lg:text-[45px] leading-none font-bold mb-4">
								{title}
							</h2>
							<p className="text-lg font-medium opacity-80 mb-9">
								{description}
							</p>
						</div>
					</div>

					<div className="grid grid-cols-6 mt-12 gap-6">
						{blogs.map((blog, i) => (
							<div
								className="col-span-6 md:col-span-3 lg:col-span-2 mb-3"
								key={i}
							>
								<BlogItem blog={blog} />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default BlogPost;
