import FadeIn from 'react-fade-in'
const UserListSkeleton = () => {
  return (
    <div className="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((key) => (
        <FadeIn>
          <div
            key={key}
            className="animate-pulse bg-secondary p-4 rounded-lg shadow-lg flex flex-col gap-4"
          >
            <div className="w-full bg-primary shadow-lg rounded-lg h-48" />
            <div className="w-full bg-primary shadow-lg rounded-full h-6" />
            <div className="w-24 bg-primary shadow-lg rounded-full h-6" />
          </div>
        </FadeIn>
      ))}
    </div>
  );
};

export default UserListSkeleton;
