import MessageForm from "./MessageForm"
import MyMessages from "./MyMessages"
import ThirdMessage from "./ThirdMessage"

const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props
    const chat = chats && chats[activeChat];
    const renderMessages = () => {
        const keys = Object.keys(messages)
        console.log(keys)
        return keys.map((key, index) => {
            const message = messages[key]
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            const isMymessage = userName === message.sender.username;
            return (
                <div key={`msg_${index}`} style={{ width: '100%' }}>
                    <div>
                        {
                            isMymessage
                                ? <MyMessages message={message} />
                                : <ThirdMessage message={message} lastMessage={messages[lastMessageKey]} />
                        }
                        <div className="read-receipts" sytle={{ marginRight: isMymessage ? '18px' : '0px', marginLeft: isMymessage ? '0px' : '68px' }}>
                            read-receipts

                        </div>
                    </div>
                </div>
            )
        })
    }

    renderMessages()

    if (!chat) return 'Loading ...'
    return (
        <div className='chat-feed'>
            <div className="chat-title-container">
                <div className="chat-title">
                    {chat.title}

                </div>
                <div className="chat-subtitle">
                    {chat.people.map((person) => `${person.person.username}`)}

                </div>
            </div>
            {renderMessages()}
            <div style={{ height: '100px' }} />
            <div className="message-form-container" />
            <MessageForm {...props} chatId={activeChat} />

        </div>
    )
}

export default ChatFeed