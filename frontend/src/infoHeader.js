import './index.css'

export const InfoHeader = ({ modalContent, modalVisible, closeModal }) => {
    const styles = {
        header: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#efefef',
        },
        modal: {
          display: 'flex',
          alignItems: 'center',
          border: '1px solid #ccc',
          borderRadius: '5px',
          width: '100%'
        },
        info: {
          display: 'flex',
          alignItems: 'center',
          marginRight: '100px', 
        },
        closeBtn: {
          cursor: 'pointer',
          marginLeft: 'auto',
          marginRight: '10px',
          backgroundColor: '#343541',
          borderRadius: '5px',
          color: '#fff',
          fontSize: '10px'
        },
        fontSize: {
          fontSize: '10px',
          marginRight: '70px',
          marginLeft: '10px',
          fontWeight: 'bold',
        },
      };

    return (
        <header style={styles.header}>
        {modalVisible && (
          <div style={styles.modal}>
            <div style={styles.info}>
              <p style={styles.fontSize}>Number of Nodes: {modalContent.num_nodes}</p> 
              <p style={styles.fontSize}>Number of Edges: {modalContent.num_edges}</p>
              <p style={styles.fontSize}>Is DAG: {modalContent.is_dag.toString()}</p>
            </div>
            <button style={styles.closeBtn} onClick={closeModal}>
              Close
            </button>
          </div>
        )}
      </header> 
    )
}