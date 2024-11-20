import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <>
      <section>
        <h1>Home</h1>
        <p>Contenido de la página Home</p>

        <Link to="/" style={{ color: '#fff' }}>
          Go to Home page
        </Link>
      </section>
    </>
  );
};
