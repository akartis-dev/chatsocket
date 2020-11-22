/**
 * @author <akartis-dev>
 *
 * Do it with love
 */
import {useToasts} from 'react-toast-notifications'

export const useIsNeedToShow = () => {
    const {addToast} = useToasts()

    const toastNewMessage = ({pseudo}) => {
        return addToast(`New message from ${pseudo}`, {appearance: 'success'})
    }

    const newMessage = (message, state, pseudo) => {
        if(message.pseudo === pseudo){
            return state(c => [...c, message])
        }
    }
    return {newMessage, toastNewMessage}
}
