import { useState } from 'react';
import './Chat.css';
import { useNavigate } from 'react-router-dom';

function Chat() {

    const navigate = useNavigate();

    const goToMenu = () => {
        navigate('/mobile-menu');
    };

    const [chatData, setChatData] = useState({
        response: '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setChatData({ ...chatData, [name]: value });
    };

    return(
        <>
        <header className='header-5 fade-in-up'>
            <div className="header-container-5">
                <div className="header-left-5">
                    <img src="logo.png" alt="Logo" className="logo-image" />
                </div>
                <div>
                    <p className='header-middle-5'>
                        CTRL+V Demo
                    </p>
                </div>
                <div className="header-right-5">
                    <button className="header-button-5" onClick={goToMenu}>☰</button>
                </div>
            </div>
        </header>
    <div className="container-5">
        <h1 className='title-5 fade-in-up'>Communicate</h1>
            <p className="description-5 fade-in-right">
                Converse with secured and trusted Agents accountable to you and have your best interests in mind.
            </p>
                <hr/>
                    <p className="chat-common chat-1-5">
                        Please identify yourself.
                    </p>
                    <p className="chat-common chat-2-5">
                        My Agent ID is 0x9d13c22706e42b98d4a83ca91ec392ddf9c8b2169c9b3c8d43127a0b34085581 and I'm secured
                        at 0x8e5bac5773e47e257c6823c1048d9df93f073fba1016d607bb8c3426ac36e7d2, but please call me Demo Agent. 
                        In case you're interested, I was born on June 29, 2024. Is there anything else I can help you with?
                    </p>
                    <p className="chat-common chat-3-5">
                        Thanks Demo Agent. Who are you accountable to?
                    </p>
                    <p className="chat-common chat-4-5">
                        I'm accountable to 0x572c242b59cfcbb1e02391b6dbf326c795fc2e6ad50d24aedce7164bb906609e and I'm here to assist you.
                    </p>
                    {/* Chat Response */}
                    <InputFieldChat
                    name="response"
                    placeholder=""
                    value={chatData.response}
                    onChange={handleInputChange}
                    />
                        <hr/>
                    <p className="copyright-5">
                        © 2024 ⎈+V
                    </p>
                    <p className='easteregg-5'>
                        We only put this here to see if anyone would read it. If you are reading it, 
                        contact us to let us know how clever and detail oriented you are.
                    </p>
                    
    </div>
        </>
    );
};

function InputFieldChat({ name, placeholder, value, onChange }) {
    return (
        <input
            type="text"
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="input-field-response"
        />
    );
}

export default Chat;