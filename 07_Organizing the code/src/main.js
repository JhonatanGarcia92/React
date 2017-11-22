

var Page = React.createClass({
    render: function(){
        return (
            <myElement>
                <Nav title="React" linkUrl="index.html" />
                <div className="container">
                    <Title title="My component title!" />
                    <div className="row">
                        <Button title="My Button" textActive="Loading.." />
                    </div>

                </div>
            </myElement>
        );
    }
});



ReactDOM.render(
    <Page />,
    document.getElementById('page')
);
