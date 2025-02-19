import React from 'react';
import { RecoilRoot } from 'recoil';
import { networkatom, jobs, messaging, notification } from './atom';
import { useRecoilValue } from 'recoil';
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkValue = useRecoilValue(networkatom);
  const jobList = useRecoilValue(jobs);
  const messageData = useRecoilValue(messaging);
  const notificationData = useRecoilValue(notification);

  return (
    <>
      <div style={{ backgroundColor: 'lightblue', padding: '10px', display: 'flex', justifyContent: 'space-around' }}>
        <button>Home</button>
        <button>my network ({networkValue >= 100 ? "99+" : networkValue})</button>
        <button>jobs</button>
        <button>messaging</button>
        <button>notification</button>
        <button>me</button>
      </div>
    </>
  );
}

export default App;
