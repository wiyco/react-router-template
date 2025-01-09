import type { Route } from "./+types/home";

export function meta(_args: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="p-4 font-sans">
      <h1 className="text-3xl">Welcome to React Router</h1>
      <ul className="mt-4 list-disc space-y-2 pl-6">
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://reactrouter.com/start/framework/installation"
            rel="noreferrer"
          >
            Getting Started
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://reactrouter.com/home"
            rel="noreferrer"
          >
            Learn React Router
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://reactrouter.com/docs"
            rel="noreferrer"
          >
            React Router Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
