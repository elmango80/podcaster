import { usePodcasterContext } from 'src/hooks/usePodcaster'
import Loading from './Loading'

function StatusNotification() {
  const {
    state: { isLoading },
  } = usePodcasterContext()

  if (!isLoading) {
    return <></>
  }

  return <Loading />
}

export default StatusNotification
