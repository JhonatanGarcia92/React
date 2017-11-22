var data = [{ id: "1", name: "Maria", email: "maria@mail.com", subject: "R", messenger: "My messenger test 1.." }, { id: "1", name: "Pedro", email: "pedro@mail.com", subject: "A", messenger: "My messenger test 2.." }];

var Page = React.createClass({
    displayName: "Page",

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
                    React.createElement(Form, null),
                    React.createElement(
                        Button,
                        { textActive: "Loading.." },
                        "Send"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(List, { data: data }),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("br", null)
                )
            )
        );
    }
});

ReactDOM.render(React.createElement(Page, null), document.getElementById('page'));