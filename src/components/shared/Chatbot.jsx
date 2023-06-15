import React, { useState, useEffect, useRef } from 'react';
const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef(null);

  const handleToggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = () => {
    if (inputValue !== '') {
      setMessages([...messages, `Tú: ${inputValue}`]);
      setInputValue('');
      setIsTyping(true);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (isTyping) {
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          'Bot: Mensaje recibido, el tiempo de espera aproximado para recibir una contestación es de una hora. También puedes enviar un mensaje mediante la sección de "Contáctanos".',
        ]);
        setIsTyping(false);
      }, 1500);
    }
  }, [isTyping, messages]);

  useEffect(() => {
    let typingTimeout;

    if (isTyping) {
      typingTimeout = setTimeout(() => {
        setIsTyping(false);
      }, 1480);
    }

    return () => {
      clearTimeout(typingTimeout);
    };
  }, [isTyping]);

  useEffect(() => {
    if (isChatOpen) {
      inputRef.current.focus();
    }
  }, [isChatOpen]);

  return (
    <div className="fixed bottom-4 right-4">
      {!isChatOpen && (
        <button
          className="text-4xl bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full w-16 h-16 flex items-center justify-center border border-blue-500"
          onClick={handleToggleChat}
        >
          <span className="flex items-center justify-center mb-1">+</span>
        </button>
      )}
      {isChatOpen && (
        <div className="bg-white border border-gray-300 rounded-lg p-4 mt-4 w-96 h-96 shadow">
          <button
            className="absolute top-5 right-2 text-gray-500 hover:text-gray-700"
            onClick={handleToggleChat}
          >
            X
          </button>
          <div className="h-64 overflow-y-auto mb-4 mt-8">
            {/* Mostrar los mensajes */}
            {messages.map((message, index) => (
              <div key={index} className="mb-2">
                {message}
              </div>
            ))}
            {isTyping && <div className="mb-2">Bot: Escribiendo...</div>}
          </div>
          <div className="flex">
            <input
              type="text"
              className="border border-gray-300 rounded-l-lg p-2 flex-1 max-w-min"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              ref={inputRef}
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-r-lg px-4 py-2 border border-blue-500"
              onClick={handleSendMessage}
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
