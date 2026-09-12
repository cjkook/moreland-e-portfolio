import Picture from "../components/Picture";
import pfPic from '../assets/cks_cropped.jpg';
export default function About() {
  return (
    <div>
       
      <h1 className="middle"><Picture
        src={pfPic}
        alt="Profile photo"
        borderRadius="50%"
        justify="left"
        width="20vh"
        height="20vh"
        inline="true"
      />Corey J. Kothenbeutel</h1>
      <p>This is the about page.</p>
    </div>
  );
}