export default function Card({ children, noPadding }) {
  let classes = "bg-slate-900 shadow-md shadow-slate-300 rounded-md mb-5";
  if (!noPadding) {
    classes += " p-4";
  }
  return <div className={classes}>{children}</div>;
}