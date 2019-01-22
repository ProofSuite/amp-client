import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import { withInfo } from '@storybook/addon-info'

import TubeChartRenderer from './TubeChartRenderer'

import { Card } from '@blueprintjs/core'

storiesOf('TubeChart', module)
    .addDecorator(withKnobs)
    .add('TubeChart Renderer', withInfo({ source: false })(() => (
        <Card className="bp3-dark">
            <TubeChartRenderer
                loading={false}
                unit="%"
                percentage={40}
            />
        </Card>
    ))
)