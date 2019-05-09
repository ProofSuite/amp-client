
import mixpanel from 'mixpanel-browser'
import { MIXPANEL_TOKEN } from '../../../config/environment'

if (process.env.NODE_ENV === 'production') {
  mixpanel.init(MIXPANEL_TOKEN)
}

export default mixpanel