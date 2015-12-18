/**
 * 集成jquery等组件示例
 */

var Demo = React.createClass({

  /*========== Component Spec ==================================================*/

  // 仅需要在以下两个方法进行集成即可
  // 在componentDidMount中进行初始化组件
  // 在componentWillUnmount对组件进行销毁处理
  componentDidMount: function() {
    // When the component is added, turn it into a modal
    $(this.refs.root).modal({backdrop: 'static', keyboard: false, show: false});
  },

  componentWillUnmount: function() {
    $(this.refs.root).off('hidden', this.handleHidden);
  },

  render: function() {
    return <div>Hello {this.props.name}</div>;
  },

  /*========== Custom Handler ==================================================*/

  handleClick: function() {
    console.log('hello daniel')
  }

});

