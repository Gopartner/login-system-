import { useAuth } from "@cont/AuthContext";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { user, role, loading } = useAuth();

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-screen">
      {user ? (
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Selamat Datang, {user.displayName || user.email}
          </h1>
          <p className="text-lg text-gray-600">
            Role Anda: <strong className="text-blue-600">{role}</strong>
          </p>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-red-500 text-lg mb-4">Anda belum login.</p>
          <Link to="/login">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition duration-200">
              Go to Login
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default HomePage;
