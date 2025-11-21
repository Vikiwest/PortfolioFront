import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useActiveTab = () => {
  const [activeTab, setActiveTab] = useState('/');
  const location = useLocation();

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  return [activeTab, setActiveTab];
};