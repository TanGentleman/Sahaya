"use client";
import { useState, useMemo, useEffect } from "react";

interface ChatMessage {
  User: string;
  Content: string;
  Date: string;
  Metadata: string;
}

interface Theme {
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  backgroundColor: string;
  textColor: string;
}

const themes = {
  light: {
    primaryColor: "blue-500",
    secondaryColor: "gray-200",
    fontFamily: "Arial",
    backgroundColor: "white",
    textColor: "black",
  },
  dark: {
    primaryColor: "blue-500",
    secondaryColor: "gray-200",
    fontFamily: "Arial",
    backgroundColor: "gray-900",
    textColor: "white",
  },
};

const ChatMessageComponent = ({ message, theme }: { message: ChatMessage; theme: Theme }) => {
  return (
    <div className={`flex flex-col p-4 border-b border-${theme.primaryColor}`}>
      <div className="flex justify-between">
        <span className={`text-lg font-bold text-${theme.textColor}`}>
          {message.User}
        </span>
        <span className={`text-sm text-${theme.secondaryColor}`}>
          {message.Date}
        </span>
      </div>
      <p className={`text-lg text-${theme.textColor}`}>
        {message.Content}
      </p>
      <p className={`text-sm text-${theme.secondaryColor}`}>
        {message.Metadata}
      </p>
    </div>
  );
};

// const LoadingIcon = () => {
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="flex flex-col items-center">
//         <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500" />
//         <span className="text-lg font-bold text-gray-600 mt-4">
//           Loading...
//         </span>
//       </div>
//     </div>
//   );
// };
const LoadingIcon = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-pink-500 border-t-transparent" />
        <span className="text-lg font-bold text-gray-600 mt-4">
          Purr-haps just a moment...
        </span>
        <div className="flex justify-center mt-2">
          <div className="h-2 w-2 rounded-full bg-pink-500 animate-bounce mr-2" />
          <div className="h-2 w-2 rounded-full bg-pink-500 animate-bounce delay-100 mr-2" />
          <div className="h-2 w-2 rounded-full bg-pink-500 animate-bounce delay-200" />
        </div>
      </div>
    </div>
  );
};

const DayPanel = ({ date, messages, theme, onClick }: { date: string; messages: ChatMessage[]; theme: Theme; onClick: () => void }) => {
  return (
    <div className={`flex flex-col p-4 border-b border-${theme.primaryColor} cursor-pointer`} onClick={onClick}>
      <span className={`text-lg font-bold text-${theme.textColor}`}>
        {date}
      </span>
      <span className={`text-sm text-${theme.secondaryColor}`}>
        {messages.length} messages
      </span>
    </div>
  );
};

const ChatLogComponent = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(themes.light);
  const [newMessage, setNewMessage] = useState("");
  const [username, setUsername] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleThemeChange = (themeName: keyof typeof themes) => {
    setTheme(themes[themeName]);
  };

  const handleSendMessage = () => {
    if (newMessage && username) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          User: username,
          Content: newMessage,
          Date: new Date().toISOString(),
          Metadata: "",
        },
      ]);
      setNewMessage("");
    }
  };

  const fetchData = async () => {
    try {
      const response = await new Promise<ChatMessage[]>((resolve) => {
        setTimeout(() => {
          resolve([
            {
              User: "John Doe",
              Content: "Hello, world!",
              Date: "2023-03-01T12:00:00.000Z",
              Metadata: "This is a test message",
            },
            {
              User: "Jane Doe",
              Content: "Hi, John!",
              Date: "2023-03-01T12:01:00.000Z",
              Metadata: "This is another test message",
            },
            {
              User: "John Doe",
              Content: "Hello, world!",
              Date: "2023-03-02T12:00:00.000Z",
              Metadata: "This is a test message",
            },
            {
              User: "Jane Doe",
              Content: "Hi, John!",
              Date: "2023-03-02T12:01:00.000Z",
              Metadata: "This is another test message",
            },
          ]);
        }, 500);
      });
      setMessages(response);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const memoizedMessages = useMemo(() => {
    return messages.filter((message) => message.Date.startsWith(selectedDate)).map((message, index) => (
      <ChatMessageComponent key={index} message={message} theme={theme} />
    ));
  }, [messages, theme, selectedDate]);

  const dates = useMemo(() => {
    return Array.from(new Set(messages.map((message) => message.Date.split("T")[0]))).sort();
  }, [messages]);

  if (loading) {
    return <LoadingIcon />;
  }

  return (
    <div className={`flex flex-col h-screen overflow-y-scroll bg-${theme.backgroundColor}`}>
      <div className="flex justify-between p-4 border-b border-gray-200">
        {/* <span className={`text-lg font-bold text-${theme.textColor}`}>
          Chat!
        </span> */}
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={() => handleThemeChange("dark")}
        >
          Dark Theme
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={() => handleThemeChange("light")}
        >
          Light Theme
        </button>
      </div>
      <div className="flex flex-col p-4">
        {dates.map((date, index) => (
          <DayPanel key={index} date={date} messages={messages.filter((message) => message.Date.startsWith(date))} theme={theme} onClick={() => setSelectedDate(date)} />
        ))}
      </div>
      {memoizedMessages}
      <div className="flex flex-col p-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="p-2 border border-gray-200 rounded"
        />
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="p-2 border border-gray-200 rounded"
        />
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatLogComponent;