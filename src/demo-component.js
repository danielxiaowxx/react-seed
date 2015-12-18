/**
 * Created by danielxiao on 15/5/31.
 */

var Demo = React.createClass({

  /*========== Component Spec ==================================================*/

  // 该组件提供的默认只读配置属性。
  // 对外提供的只读配置属性都必须在这里声明，让调用方可以方便地知道有哪些配置
  getDefaultProps: function() {
    var defaultProps = {
      name: ''
    };
    return defaultProps;
  },

  // 该组件提供的默认可变属性，或称状态，用于交互
  getInitialState: function() {
    return {};
  },

  render: function() {
    return <div>Hello {this.props.name}</div>;
  },

  /*========== Custom Handler ==================================================*/

  handleClick: function() {
    console.log('hello daniel')
  }

});
