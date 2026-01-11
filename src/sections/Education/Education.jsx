import Section from "../../Section.jsx";
import { EDUCATION } from "../../data/content.js";
import "./education.css";

export default function Education() {
  if (!EDUCATION) return null;

  const { degree, school, period, gpa, highlights } = EDUCATION;

  return (
    <Section
      id="education"
      title="Education"
      subtitle="Academic background and highlights."
    >
      <div className="eduDesigner">
        <article className="eduPaper">
          <div className="eduRail" aria-hidden="true" />

          <header className="eduHeader">
            <div className="eduTitleBlock">
              <div className="eduKicker">Education</div>
              <h3 className="eduHeading">{degree}</h3>
              <div className="eduSub">
                <span className="eduSchoolName">{school}</span>
                <span className="eduSep">•</span>
                <span className="eduPeriod">{period}</span>
              </div>
            </div>

            <div className="eduStamp" aria-label="Academic profile">
              <div className="eduStampTop">GPA</div>
              <div className="eduStampVal">{gpa}</div>
            </div>
          </header>

          <div className="eduStats">
            <div className="eduStat">
              <div className="eduStatLabel">Rank</div>
              <div className="eduStatValue">2nd</div>
              <div className="eduStatHint">in Department</div>
            </div>

            <div className="eduStat">
              <div className="eduStatLabel">Scholarship</div>
              <div className="eduStatValue">Merit</div>
              <div className="eduStatHint">Full + Top 3 Award</div>
            </div>

            <div className="eduStat">
              <div className="eduStatLabel">Leadership</div>
              <div className="eduStatValue">Co-founder</div>
              <div className="eduStatHint">Cyber Security Club</div>
            </div>
          </div>

          <div className="eduBody">
            <div className="eduBodyHead">
              <div className="eduKicker">Highlights</div>
            </div>

            <ul className="eduBullets">
              {highlights?.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </Section>
  );
}
