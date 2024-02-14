export default function Layout({ children, bgColor, padding }) {
  return (
    <div
      className={`${padding} position-relative w-100 h-100`}
      style={{ backgroundColor: `${bgColor}` }}
    >
      {children}
    </div>
  );
}
