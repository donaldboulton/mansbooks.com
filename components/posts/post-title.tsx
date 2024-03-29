export default function PostTitle({ children }) {
  return (
    <h1 className="mb-12 text-center text-2xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-8xl">
      <div>{children}</div>
    </h1>
  );
}
