import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

const _EditModal = ({clickHandler, dispatch}) => {
  return (
    <div>
      <input type="button" value="save?" onClick={() => dispatch(clickHandler())}/>
      lets edit something
    </div>
  )
}

const EditModal = connect((state, ownProps) => ownProps)(_EditModal)

const SaveModal = ({}) => {
  return (
    <div>SAVED</div>
  )
}

const modalLookup = {
  "EDIT": EditModal,
  "SAVE": SaveModal
}

const style = {
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  backgroundColor: "rgba(0,0,0,0.15)",
  display: "flex",
  padding: "50px"
}

const innerStyle = {
  backgroundColor: "gainsboro",
  flex: "1 0 auto",
  padding: "20px"
}

class Modal extends Component {
  render() {
    const { modalProps, modalType } = this.props
    if (!modalType) {
      return null
    }

    const InnerModal = modalLookup[modalType]

    return (
      <div style={style}>
        <div style={innerStyle}>
          <InnerModal {...modalProps}/>
        </div>
      </div>
    )
  }
}

export default connect(state => state.modal)(Modal)
