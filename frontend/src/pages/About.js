const About = () => {
  return (
    <div className="about-page">
      <h1>🏋️ Welcome to Workout Tracker!</h1>

      <p>
        This isn't just another workout app — it's your personal fitness sidekick. Track your reps,
        log your progress, and flex your CRUD skills (Create, Read, Update, Delete, remember?) all in one place!
      </p>

      <h2>🔥 What You Can Do</h2>
      <ul>
        <li>✅ <strong>Add</strong> new workouts to your log</li>
        <li>📋 <strong>View</strong> your workout history</li>
        <li>✏️ <strong>Edit</strong> workouts if you change your mind</li>
        <li>🗑️ <strong>Delete</strong> old entries and keep things fresh</li>
      </ul>

      <h2>🛠️ Built With</h2>
      <ul>
        <li><strong>Frontend:</strong> React + Context + Hooks</li>
        <li><strong>Backend:</strong> Express.js REST API</li>
        <li><strong>Database:</strong> MongoDB</li>
        <li><strong>Styling:</strong> Custom CSS + Responsive design</li>
        <li><strong>Deployment:</strong> Docker + GitHub Actions + EC2</li>
      </ul>

      <h2>🚀 Why I Built This</h2>
      <p>
        As a developer learning full-stack web development, I wanted to create something useful,
        hands-on, and fun. This app helped me practice React, REST APIs, MongoDB, Docker, and deployment — all wrapped in one!
      </p>

      <h2>🌱 Coming Soon</h2>
      <ul>
        <li>🔐 User login and authentication</li>
        <li>📊 Progress tracking with charts</li>
        <li>🌙 Dark mode toggle</li>
        <li>🏷️ Workout categories and filters</li>
      </ul>

      <p>Thanks for stopping by! 💪</p>
    </div>
  );
};

export default About;
