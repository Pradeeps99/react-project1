
import stretchingImage from '../assets/performance1.png';
import runningImage from '../assets/performance2.png';

function Performance() {
  return (
    <>
      {/* First Performance Section */}
      <section className="performance-one">
        <div className="performance-content">
          <h2>
            BRING YOUR PERFORMANCE
            <br />
            TO HIGHER LEVEL
          </h2>

          <p>
            Improve your fitness and build strength.
            Take your performance to the next level
            with SportX.
          </p>

          <button className="performance-btn">Know</button>
        </div>

        <div className="performance-image">
          <img src={stretchingImage} alt="Athlete stretching" />
        </div>
      </section>

      {/* Second Performance Section */}
      <section className="performance-two">
        <div className="performance-image">
          <img src={runningImage} alt="Athlete running" />
        </div>

        <div className="performance-content">
          <h2>
            BRING YOUR PERFORMANCE
            <br />
            TO HIGHER LEVEL
          </h2>

          <p>
            Train harder, stay focused and achieve
            your fitness goals with SportX.
          </p>

          <button className="performance-btn">Know</button>
        </div>
      </section>
    </>
  );
}

export default Performance;
