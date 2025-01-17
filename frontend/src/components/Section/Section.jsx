
import './Section.css';

const Section = ({ title, content, bgColor }) => {
  return (
    <section className="section" style={{ backgroundColor: bgColor }}>
      <div className="container">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </section>
  );
};

export default Section;
