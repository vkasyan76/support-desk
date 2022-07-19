import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getTicket, reset } from '../features/tickets/ticketSlice'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

function Ticket() {
  const { ticket, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.tickets,
  )

  const params = useParams()
  const dispatch = useDispatch()
  const { ticketId } = useParams()

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    dispatch(getTicket(ticketId))
    //eslint-disable-next-line
  }, [isError, message, ticketId])

  return <div>Ticket</div>
}

export default Ticket
