import './index.css'
import { SubmitButton } from './submit';

export const Header = ({ toggleMiniMap, showMiniMap, onSubmit }) => {

    return (
        <div class="header">
            <header>
                <div className="header-text">AI Pipeline Simulator</div>
                <div>
                    <button onClick={toggleMiniMap} style={{
                        cursor: 'pointer', backgroundColor: '#343541',
                        borderRadius: '5px',
                        color: '#fff',
                        fontSize: '10px',
                        marginRight: '20px'
                    }}>
                        {showMiniMap ? 'Minimize Mini-Map' : 'Maximize Mini-Map'}
                    </button>
                    <SubmitButton onSubmit={onSubmit} />
                </div>
            </header>
        </div>
    )
}