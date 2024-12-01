import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { Landing } from '@views';

export const AppRoutes = () => {
  const defaultRoute = 'landing';

  return (
    <Router>
      <Routes>
        <Route path="landing" element={<Landing />} />
        <Route path={'*'} element={<Navigate to={defaultRoute} />} />
      </Routes>
    </Router>
  );
};
