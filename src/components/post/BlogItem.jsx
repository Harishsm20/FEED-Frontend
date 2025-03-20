const BlogItem = ({ blog }) => {
	const { title, image } = blog;

	return (
		<article className="rounded-lg shadow-lg bg-white dark:bg-[#1E2735] dark:shadow-none overflow-hidden pb-2">
			<div className="relative">
				<img
					src={image}
					alt={title}
					className="h-auto w-full shadow-lg dark:shadow-none"
				/>
			</div>
		</article>
	);
};

export default BlogItem;