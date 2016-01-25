/** @jsx React.DOM  */

var MessageBox = React.createClass({
    deleteMessage: function(message){
        var newMessages = _.without(this.state.messages, message);
        this.setState({
            messages: newMessages
        });
    },

    handleAdd: function(e){
        var newMessage = this.refs.newMessage.getDOMNode().value;
        var newMessages = this.state.Messages.concat([newMessage]);
        this.setState({
            messages: newMessages
        });
    },

    getInitialState: function(){
        return{
            isInvisible: true,
            messages:[
                        ' I like the world',
                        'I love iceream'
            ]

        }
    },

    render: function(){

        var inlineStyles = {
        display{}
        }
    }





})