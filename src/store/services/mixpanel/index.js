
import mixpanel from 'mixpanel-browser'
import { MIXPANEL_TOKEN } from '../../../config/environment'

mixpanel.init(MIXPANEL_TOKEN)

export default mixpanel