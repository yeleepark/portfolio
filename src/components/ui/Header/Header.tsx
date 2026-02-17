export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 px-4 py-2 bg-white border-b-2 border-black"
      style={{
        boxShadow:
          "2px 2px 0 0 rgba(0, 0, 0, 0.25), inset -1px -1px 0 0 rgba(0, 0, 0, 0.15), inset 1px 1px 0 0 rgba(255, 255, 255, 0.9)",
      }}
    />
  );
}
