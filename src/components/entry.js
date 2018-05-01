import { Entry } from 'gui'
import Base from './base'

export default class Wrapper extends Base {
  constructor(props) {
    super(Entry.create())

    this.update(null, props)
  }

  update(lastProps, props) {
    if (props.defaultText) {
      this._ele.setText(props.defaultText)
    }

    // style
    this.applyStyle(props.style)

    // event
    this.updateSignal('onTextChange', props.onTextChange)
    this.updateSignal('onActivate', props.onActivate)
  }
}
