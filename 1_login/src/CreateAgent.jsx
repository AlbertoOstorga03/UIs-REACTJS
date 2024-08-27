import { useState } from 'react';
import './CreateAgent.css';
import { useNavigate } from 'react-router-dom';

function CreateAgent() {
    const navigate = useNavigate();
    
    {/* Initialize the formData state */}
    const [formData, setFormData] = useState({
        agentName: '',
        agentObjective: '- Objective -',
        agentModel: '- Model -',
        agentPurpose: ''
    });

    const goToMenu = () => {
        navigate('/mobile-menu');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <>
        <header className='header-4 fade-in'>
            <div className="header-container-4">
                <div className="header-left-4">
                    <img src="logo.png" alt="Logo" className="logo-image" />
                </div>
                <div>
                    <p className='header-middle-4'>
                        CTRL+V Demo
                    </p>
                </div>
                <div className="header-right-4">
                    <button className="header-button-4" onClick={goToMenu}>☰</button>
                </div>
            </div>
        </header>
        <div className="createAgent-page fade-in">
            <h1 className="title-4 fade-in-up">Create Agent</h1>
            <p className="subtitle-4 fade-in-right">Agents are created on this page. Users define the type and objectives their Agents should have.</p>
            <hr />
            <form className="createAgent-form">
                {/* Agent Name Input */}
                <InputFieldCreateName
                    name="agentName"
                    placeholder="Agent Name"
                    value={formData.agentName}
                    onChange={handleInputChange}
                />

                {/* Agent Objective Selector */}
                <label htmlFor="agentObjective"></label>
                <select
                    name="agentObjective"
                    value={formData.agentObjective}
                    onChange={handleInputChange}
                    className="select-field-agentObjective"
                >
                    <option value="Null">- Objective -</option>
                    <option value="Finance">Finance</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Education">Education</option>
                    <option value="Other">Other...</option>
                </select>

                {/* Agent Model Selector */}
                <label htmlFor="agentModel"></label>
                <select
                    name="agentModel"
                    value={formData.agentModel}
                    onChange={handleInputChange}
                    className="select-field-agentModel"
                >
                    <option value="Null">- Model -</option>
                    <option value="Cerebras">Cerebras</option>
                    <option value="GROK">GROK</option>
                    <option value="Llama">Llama</option>
                    <option value="Claude3.5">Claude 3.5</option>
                    <option value="ChatGPT3.5">ChatGPT 3.5</option>
                    <option value="ChatGPT4.0">ChatGPT 4.0</option>
                    <option value="Other">Other...</option>
                </select>

                {/* What should this agent help you with? */}
                <AgentPurposeTextarea
                    name="agentPurpose"
                    placeholder="What should this Agent help you with?"
                    value={formData.agentPurpose}
                    onChange={handleInputChange}
                />
                
                <button type="submit" className="createAgent-button">Create ➔</button>
            </form>
            <hr className='hrlast' />
            <p className="copyright-4">© 2024 ⎈+V</p>
            <p className='easteregg-4'>
                We only put this here to see if anyone would read it. If you are reading it, contact us to let us know how clever and detail oriented you are.
            </p>
        </div>
        </>
    );
}

{/* InputFieldCreateName component */}
function InputFieldCreateName({ name, placeholder, value, onChange }) {
    return (
        <input
            type="text"
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="input-field-agentName"
        />
    );
}

{/* AgentPurposeTextarea component */}
function AgentPurposeTextarea({ name, placeholder, value, onChange }) {
    return (
        <textarea
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="textarea-field-agentPurpose"
        />
    );
}

export default CreateAgent;
