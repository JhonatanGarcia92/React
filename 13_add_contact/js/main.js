
var Page = React.createClass({
    displayName: "Page",

    getInitialState: function () {
        return { data: [{ id: "1", name: "Maria", email: "maria@mail.com", subject: "R", messenger: "My messenger test 1.." }, { id: "2", name: "Pedro", email: "pedro@mail.com", subject: "A", messenger: "My messenger test 2.." }] };
    },

    handleContactSubumit: function (contact) {
        console.log(contact);
        var newContacts = this.state.data.concat([contact]);
        this.setState({ data: newContacts });
    },

    render: function () {
        return React.createElement(
            "myElement",
            null,
            React.createElement(Nav, { title: "React", linkUrl: "index.html" }),
            React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                    Title,
                    null,
                    "My component title!"
                ),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(Form, { onContactSubumit: this.handleContactSubumit, idNumber: this.state.data.length + 1 })
                ),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(List, { data: this.state.data }),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("br", null)
                )
            )
        );
    }
});

ReactDOM.render(React.createElement(Page, null), document.getElementById('page'));