function ReviewCard({ review }) {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg m-2">
      <p className="text-gray-600">{review.content}</p>
      <div className="flex justify-between items-center mt-4">
        <div>
          <h5 className="font-bold">{review.author}</h5>
          <p className="text-sm text-gray-500">{review.date}</p>
        </div>
        <p className="text-yellow-500">{/* Display stars based on review.rating */}</p>
      </div>
    </div>
  );
}


export default function Reviews() {
  const reviews = [
    { author: 'John Doe', date: '2023-01-01', content: 'Great service!', rating: 5 },
    { author: 'John Doe', date: '2023-01-01', content: 'Great service!', rating: 5 },

    // Add more reviews here
  ];

  return (
    <div className="bg-gray-200 p-10">
      <h2 className="text-2xl font-bold mb-2">Customer Reviews</h2>
      <div className="flex flex-wrap justify-center">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </div>
  );
};
