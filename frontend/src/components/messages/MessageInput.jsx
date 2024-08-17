import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import useGetMessages from "../../hooks/useGetMessages";

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const { loading: sendLoading, sendMessage } = useSendMessage();
  const { getMessages } = useGetMessages();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;

    await sendMessage(message);
    setMessage("");
    
    // Mesaj gönderildikten sonra mesajları yeniden çek
    await getMessages();
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative flex items-center">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3 bg-white-500 hover:bg-blue-600 text-white rounded-full transition-colors duration-300"
          disabled={sendLoading}
        >
          {sendLoading ? (
            <div className="w-5 h-5 border-4 border-t-transparent border-green-500 border-solid rounded-full animate-spin"></div>
          ) : (
            <BsSend className="w-5 h-5" />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;


// STARTER CODE SNIPPET
// import { BsSend } from "react-icons/bs";

// const MessageInput = () => {
// 	return (
// 		<form className='px-4 my-3'>
// 			<div className='w-full'>
// 				<input
// 					type='text'
// 					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
// 					placeholder='Send a message'
// 				/>
// 				<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
// 					<BsSend />
// 				</button>
// 			</div>
// 		</form>
// 	);
// };
// export default MessageInput;