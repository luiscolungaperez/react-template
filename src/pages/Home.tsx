import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <>
      <section>
        <h1>Home</h1>
        <p>Contenido de la página Home</p>

        <Link to="/about" style={{ color: '#fff' }}>
          Go to About page
        </Link>
      </section>
    </>
  );
};
