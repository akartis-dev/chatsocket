/**
 * @author <akartis-dev>
 *
 * Do it with love
 */
import {useToasts} from 'react-toast-notifications'

export const useIsNeedToShow = () => {
    const {addToast} = useToasts()

    const newMessage = (message, state, pseudo) => {
        if(message.pseudo === pseudo){
            return state(c => [...c, message])
        }
        return addToast(`New message from ${message.pseudo}`, {appearance: 'success'})
    }
    return {newMessage}
}
