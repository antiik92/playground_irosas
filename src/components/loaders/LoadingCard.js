function LoadingCard() {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-screen max-w-screen-lg border-2 rounded-md p-5">
          <div className="flex animate-pulse flex-row items-center space-x-5 flex justify-center">
            <div className="w-12 bg-gray-500 h-12 rounded-full flex"></div>
            <div className="flex flex-col space-y-3 ">
            <div className="w-36 h-6 rounded-md bg-gradient-to-r from-gray-300 to-gray-600 animate-pulse"></div>
            <div className="w-24 h-6 rounded-md bg-gradient-to-r from-gray-700 to-gray-300 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default LoadingCard;
  