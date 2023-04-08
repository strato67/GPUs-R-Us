import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-9xl font-bold">404</h1>
            <h2 className="text-2xl font-bold py-2">Page not found.</h2>
            <p className="pt-6 pb-8">
              Sorry, the page you requested could not be found.
            </p>
            <Link to="/" className="btn btn-primary">
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
