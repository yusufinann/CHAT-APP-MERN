import { useEffect, useState, useCallback } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const getMessages = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/messages/${selectedConversation._id}`);
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setMessages(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }, [selectedConversation._id, setMessages]);

  useEffect(() => {
    if (selectedConversation?._id) {
      getMessages();
    }
  }, [selectedConversation?._id, getMessages]);

  return { messages, loading, getMessages };
};

export default useGetMessages;
