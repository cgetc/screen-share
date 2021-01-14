import Send from '@/components/send'
import Receive from '@/components/receive'

export default [
    { path: '/share/:key', component: Receive },
    { path: '', component: Send },
]
