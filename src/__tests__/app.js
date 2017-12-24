// NOTE: force "production" or the react-reconciler will
// swallow errors in environments where DOM doesn't exist
process.env.NODE_ENV = 'production'

const React = require('react')
const gui = require('gui')
const { render } = require('../index')

class MyComp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    // console.log('mount')
  }

  render() {
    return (
      <container>
        <button
          title="MyComp"
          onClick={() => console.log('ENTER')}
        />
      </container>
    )
  }
}

const ele = (
  <container
    style={{
      flexDirection: 'row',
    }}
  >
    <button
      title="Hello"
      style={{
        color: '#DDDDDD',
      }}
      onClick={() => console.log('hello')}
    />
    {/* {['a', 'b', 'c'].map(i => (
      <button
        key={i}
        title={i}
      />
    ))} */}
  </container>
)

const win = gui.Window.create({})
win.setContentSize({ width: 400, height: 400 })
win.onClose = () => gui.lifetime.quit()

const contentView = gui.Container.create()
contentView.setStyle({ flexDirection: 'row' })
win.setContentView(contentView)

render(ele, contentView, () => {
  console.log('__A')
})

win.center()
win.activate()

setTimeout(() => {
  const ele2 = (
    <container
      style={{
        flexDirection: 'row',
      }}
    >
      <button
        title="Hello2"
        style={{
          color: '#DDDDDD',
        }}
      />
      <MyComp />
      {/* {['e', 'b', 'c'].map(i => (
        <button
          key={i}
          title={i}
        />
      ))} */}
    </container>
  )

  render(ele2, contentView, () => {
    console.log('__B')
  })
})

if (!process.versions.yode) {
  gui.lifetime.run()
  process.exit(0)
}
