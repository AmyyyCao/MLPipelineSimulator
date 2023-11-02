// draggableNode.js

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType }
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      style={{
        cursor: 'grab',
        width: '40px',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '8px',
        backgroundColor: '#444654',
        justifyContent: 'center',
        flexDirection: 'column',
        fontSize: '10px',
      }}
      draggable
    >
      <span style={{ color: '#fff' }}>{label}</span>
    </div>
  );
};
