export default function Layout({ children, bgColor }) {
  return (
    <div
      className="layout-padding position-relative layout-padding w-100 h-100"
      style={{ backgroundColor: `${bgColor}` }}
    >
      {children}
    </div>
  );
}
