import {
  FiShare2,
  FiTrendingUp,
  FiTarget,
  FiFeather,
  FiPenTool,
  FiMail,
  FiMonitor,
  FiUsers,
} from 'react-icons/fi';

const icons = {
  FiShare2,
  FiTrendingUp,
  FiTarget,
  FiFeather,
  FiPenTool,
  FiMail,
  FiMonitor,
  FiUsers,
};

const IconResolver = ({ name, className }) => {
  const Icon = icons[name] ?? FiTrendingUp;
  return <Icon className={className} />;
};

export default IconResolver;
