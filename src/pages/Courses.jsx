import { Link } from 'react-router-dom';

export default function Courses({ course }) {
  if (!course) {
    return <h1>Course not found</h1>;
  }

  return (
    <div className="course-detail">
      <h1>{course.title}</h1>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p>{course.description}</p>
      {course.syllabus && <p>{course.syllabus}</p>}

      {course.projects && course.projects.length > 0 && (
        <div className="course-projects">
          <h2>Projects</h2>
          <div className="projects-buttons">
            {course.projects.map((project, index) => (
              <Link
                key={index}
                to={`/${project.link}`}
                className="project-button"
              >
                {project.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}