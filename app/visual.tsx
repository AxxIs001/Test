const Visual = () => {
    return (
        <div className="bg-gray-200 min-h-screen flex justify-center items-center mx-24">
            <div className="relative bg-blue-600 text-white rounded-lg shadow-lg p-6 w-80">
                <div className="absolute -top-2 -left-2 bg-orange-400 w-6 h-6 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-xs font-bold">P</span>
                </div>
                <div className="flex justify-between">
                    <div className="font-bold">Hello</div>
                    <ul className="list-disc space-y-1 pl-5">
                        <li>Point 1</li>
                        <li>Point 2 xxxx</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Visual;