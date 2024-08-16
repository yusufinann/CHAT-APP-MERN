import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "../sidebar/Conversation"
const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  console.log(
    "CONVERSATIONS : ",
    conversations.length === 0 ? "empty" : conversations
  );

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {loading ? <span className="loading loading-spinner"></span> : null}
      {!loading && conversations.length === 0 && (
        <div>Henüz bir konuşma yok.</div>
      )}
      {
        conversations.map((conversation,idx) => (
          <Conversation
           key={conversation._id}
           conversation={conversation}
           emoji={getRandomEmoji()}
           lastIdx={idx===conversations.length-1}
           />
          

        ))
      }
    </div>
  );
};

export default Conversations;
