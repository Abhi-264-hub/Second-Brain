import { useNavigate } from "react-router-dom";
export const Home = () => {
    const navigate = useNavigate(); // Hook for programmatic navigation
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white text-center px-6">
            <h1 className="text-5xl font-bold mb-6">
                Welcome to Our Platform
            </h1>
            <p className="text-lg mb-8 max-w-2xl">
                Join us to explore amazing content, connect with others, and manage your data effortlessly.
            </p>
            <button
                className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-100 hover:shadow-xl transition-all duration-300"
                onClick={() => navigate('/signup')}
            >
                Get Started
            </button>
        </div>
    );
};
