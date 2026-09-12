export default function Picture({
  src,
  alt,
  borderRadius,
  justify,
  width,
  height,
  inline,
}) {
  const style = {
    borderRadius: borderRadius || "0px",
    width: width || "100%",
    height: height || "auto",
  };

  const containerStyle = {
    display: inline ? "inline-flex" : "flex",
    justifyContent: justify || "center",
    margin: "20px 0",
  };

  return (
    <div style={containerStyle}>
      <img src={src} alt={alt || "Image"} style={style} />
    </div>
  );
}
