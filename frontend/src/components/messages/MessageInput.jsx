import { LuSend } from "react-icons/lu";

const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
      <div className='w-full relative'>
        <input
          type='text'
          className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
          placeholder='Send a message'
        />
        <button
          type='submit'
          className='absolute inset-y-0 end-0 flex items-center pe-3 text-white hover:bg-white hover:text-gray-700 rounded-full p-2 transition-colors'
        >
          <LuSend className='w-5 h-5' />
        </button>
      </div>
    </form>
  );
}

export default MessageInput;
