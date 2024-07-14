export const SwitchWidgetExtension = {
  name: 'SwitchWidget',
  type: 'effect',
  match: ({ trace }) =>
    trace.type === 'ext_switchwidget' ||
    trace.payload.name === 'ext_switchwidget',
  effect: ({ trace }) => {
    const { widget } = trace.payload || 'zendesk'
    console.log('Switching to:', widget)

    // Function to switch from Voiceflow to Zendesk
    function switchToZendesk() {
      window.voiceflow.chat.hide()
      if (window.zE) {
        window.zE('messenger', 'show')
        window.zE('messenger', 'open')
      }
    }

    // Function to switch from Zendesk to Voiceflow
    function switchToVoiceflow() {
      if (window.zE) {
        window.zE('messenger', 'hide')
      }
      window.voiceflow.chat.show()
      window.voiceflow.chat.open()
    }

    if (widget === 'zendesk') {
      switchToZendesk()
    } else {
      switchToVoiceflow()
    }
  },
}
