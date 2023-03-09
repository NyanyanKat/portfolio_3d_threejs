import { Html, useProgress } from '@react-three/drei';
import PacmanLoader from 'react-spinners/PacmanLoader';

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 14,
          color: '#f1f1f1',
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
      <PacmanLoader color="white" size={30} />
    </Html>
  );
};

export default CanvasLoader;
