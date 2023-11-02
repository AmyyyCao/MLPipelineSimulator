import { useState } from 'react';
import { Header } from './header';
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { InfoHeader } from './infoHeader';
import { useStore } from './store';

function App() {
  const [showMiniMap, setShowMiniMap] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const store = useStore();

  const toggleMiniMap = () => {
    setShowMiniMap(!showMiniMap);
    console.log("showMiniMap:", showMiniMap);
  };

  const onSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8081/pipelines/parse?nodes=' + JSON.stringify(store.nodes) + '&edges=' + JSON.stringify(store.edges), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const responseData = await response.json();
        setModalContent(responseData);
        setModalVisible(true);
      } else {
        alert('Error: Failed to submit the form');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  }

  return (
    <div>
      <Header toggleMiniMap={toggleMiniMap} showMiniMap={showMiniMap} onSubmit={onSubmit} />
      <InfoHeader modalVisible={modalVisible} modalContent={modalContent} closeModal={closeModal} />
      <PipelineUI toggleMiniMap={toggleMiniMap} showMiniMap={showMiniMap} />
      <PipelineToolbar />
    </div>
  );
}

export default App;
